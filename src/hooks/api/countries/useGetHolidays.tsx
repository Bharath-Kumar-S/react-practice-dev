import { useCallback, useEffect, useMemo, useState } from "react";
import { Holiday } from "../../../types/country/country";

const getOrdinal = (n: number) => {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

const formatDateToShort = (dateStr: string) => {
  const date = new Date(dateStr);
  const day = getOrdinal(date.getDate());
  const month = date.toLocaleString("en-GB", { month: "short" }); // "Jan", "Feb", etc.
  return `${day} ${month}`;
};

export const useGetHolidays = ({ code = "NL", from = "", to = "" }) => {
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCountries = useCallback(async () => {
    try {
      const response = await fetch(
        `https://openholidaysapi.org/PublicHolidays?countryIsoCode=${code}&validFrom=${from}&validTo=${to}&languageIsoCode=EN`
      );
      if (!response.ok) throw new Error("Failed to fetch countries");
      const data = await response.json();
      setHolidays(data);
    } catch (error) {
      setError("Error fetching countries");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [code, from, to]);

  const memoizedHolidays = useMemo(
    () =>
      holidays.map((country) => ({
        text: country.name[0].text,
        date: formatDateToShort(country.startDate),
      })),
    [holidays]
  );

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  return { holidays: memoizedHolidays, loading, error };
};
