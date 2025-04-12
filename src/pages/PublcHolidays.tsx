import { useState } from "react";
import { useGetCountries } from "../hooks/api/countries/useGetCountries";
import { useGetHolidays } from "../hooks/api/countries/useGetHolidays";

export const PublcHolidays = () => {
  const { countries } = useGetCountries();
  const [selectedCountry, setSelectedCountry] = useState<string>("NL");
  const currentYear = new Date().getFullYear();
  const { holidays, loading, error } = useGetHolidays({
    code: selectedCountry,
    from: `${currentYear}-01-01`,
    to: `${currentYear}-12-31`,
  });

  return (
    <>
      <div className="m-5">PublcHolidays</div>

      <div className="flex flex-col items-center justify-center">
        <select
          className="mb-4 p-2 border rounded"
          onChange={(e) => setSelectedCountry(e.target.value)}
          value={selectedCountry}
        >
          {countries.map((country, index) => (
            <option key={index} value={country.isoCode}>
              {country.text}
            </option>
          ))}
        </select>

        <h4 className="text-sky-700 text-2xl font-bold underline cursor-text text-center m-5">
          {selectedCountry}
        </h4>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {holidays.length > 0 && (
          <ul className="list-disc">
            {holidays.map((holiday, index) => (
              <li key={index} className="mb-2 list-none">
                {holiday.text} - {holiday.date}
              </li>
            ))}
          </ul>
        )}
        {holidays.length === 0 && !loading && !error && (
          <p className="text-gray-500">No holidays found for this country.</p>
        )}
      </div>
    </>
  );
};
