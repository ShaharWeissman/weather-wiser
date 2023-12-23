const apiUrl =
  "http://dataservice.accuweather.com/locations/v1/cities/autocomplete";
const apiKey = "i3fqvI3PsZLdmfu3VIIY9UOsS1mxnACx";

export async function cityLookup(cityStr: string) {
  const response = await fetch(
    `${apiUrl}?q=${cityStr}&apiKey=${apiKey}`
  );
  const data = await response.json();
  return data;
}
