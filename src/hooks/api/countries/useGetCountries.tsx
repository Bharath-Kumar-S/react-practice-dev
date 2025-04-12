import { useCallback, useEffect, useMemo, useState } from "react";
import { Country } from "../../../types/country/country";

export const useGetCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCountries = useCallback(async () => {
    try {
      const response = await fetch(
        "https://openholidaysapi.org/Countries?languageIsoCode=EN"
      );
      if (!response.ok) throw new Error("Failed to fetch countries");
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      setError("Error fetching countries");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const memoizedCountries = useMemo(
    () =>
      countries.map((country) => ({
        text: country.name[0].text,
        isoCode: country.isoCode,
      })),
    [countries]
  );

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  return { countries: memoizedCountries, loading, error };
};
