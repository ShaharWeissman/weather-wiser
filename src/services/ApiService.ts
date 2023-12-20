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
    { day: "Thursday", temperature: "34°C" }
  ];
  