import lookup from "country-code-lookup";

export const checkCountries = (country: string) => {
  if (country === "UK") return "GB";
  if (country === "UAE") return "AE";
  if (country === "USA") return "US";
  if (country === "Korea") return "KR";

  const code = lookup.byCountry(country);

  if (!code) return "";

  return code.iso2;
};
