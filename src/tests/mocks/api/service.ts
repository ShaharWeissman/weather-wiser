// mockData.ts
export interface WeatherDay {
  day: string;
  temperature: string;
}

export const mockData: WeatherDay[] = [
  { day: "Sunday", temperature: "38°C" },
  { day: "Monday", temperature: "38°C" },
  { day: "Tuesday", temperature: "37°C" },
  { day: "Wednesday", temperature: "35°C" },
  { day: "Thursday", temperature: "34°C" },
];

export interface FavoritesData {
  city: string;
  temperature: string;
  description: string;
}

export const FavoritesMockData: FavoritesData[] = [
  { city: "New York", temperature: "30°C", description: "sunny" },
  { city: "Paris", temperature: "25°C", description: "cloudy" },
  { city: "Tokyo", temperature: "27°C", description: "rainy" },
  { city: "Sydney", temperature: "22°C", description: "clear skies" },
  { city: "Cairo", temperature: "35°C", description: "hot and dry" },
  { city: "London", temperature: "20°C", description: "foggy" },
];

export async function cityLookup(cityStr = "madrid") {
  console.log(cityStr);
  return [
    {
      Version: 1,
      Key: "308526",
      Type: "City",
      Rank: 10,
      LocalizedName: "Madrid",
      Country: {
        ID: "ES",
        LocalizedName: "Spain",
      },
      AdministrativeArea: {
        ID: "MD",
        LocalizedName: "Madrid",
      },
    },
    {
      Version: 1,
      Key: "108179",
      Type: "City",
      Rank: 55,
      LocalizedName: "Madrid",
      Country: {
        ID: "CO",
        LocalizedName: "Colombia",
      },
      AdministrativeArea: {
        ID: "CUN",
        LocalizedName: "Cundinamarca",
      },
    },
  ];
}