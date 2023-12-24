import { DailyForecast, LocationDetails } from "./../../../types/index";
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

export async function getCurrentWeather(locationKey: string) {
  console.log(locationKey);
  const mockLocationDetails: { [key: string]: LocationDetails } = {
    "308526": {
      //madrid
      LocalObservationDateTime: "2023-12-21T22:55:00+08:00",
      EpochTime: 1703170500,
      WeatherText: "Mostly clear",
      WeatherIcon: 34,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: false,
      Temperature: {
        Metric: {
          Value: 28.6,
          Unit: "C",
          UnitType: 17,
        },
        Imperial: {
          Value: 83.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      MobileLink:
        "http://www.accuweather.com/en/ph/madridejos/262718/current-weather/262718?lang=en-us",
      Link: "http://www.accuweather.com/en/ph/madridejos/262718/current-weather/262718?lang=en-us",
    },

    "215854": {
      //Tel aviv
      LocalObservationDateTime: "2023-12-24T15:42:00+02:00",
      EpochTime: 1703425320,
      WeatherText: "Mostly cloudy",
      WeatherIcon: 6,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 19.9,
          Unit: "C",
          UnitType: 17,
        },
        Imperial: {
          Value: 68.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    },
  };

  return (
    mockLocationDetails[locationKey] || {
      WeatherText: "Data not found",
    }
  );
}

export async function getDailyForecast(locationKey: string) {
  const forecastMockData: { [key: string]: DailyForecast[] } = {
    "308526": [
      {
        Date: "2023-12-21T07:00:00+08:00",
        EpochDate: 1703113200,
        Temperature: {
          Minimum: {
            Value: 82.0,
            Unit: "F",
            UnitType: 18,
          },
          Maximum: {
            Value: 86.0,
            Unit: "F",
            UnitType: 18,
          },
        },
        Day: {
          Icon: 3,
          IconPhrase: "Partly sunny",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Light",
        },
        Night: {
          Icon: 35,
          IconPhrase: "Partly cloudy",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/ph/madridejos/262718/daily-weather-forecast/262718?day=1&lang=en-us",
        Link: "http://www.accuweather.com/en/ph/madridejos/262718/daily-weather-forecast/262718?day=1&lang=en-us",
      },
      {
        Date: "2023-12-22T07:00:00+08:00",
        EpochDate: 1703199600,
        Temperature: {
          Minimum: {
            Value: 80.0,
            Unit: "F",
            UnitType: 18,
          },
          Maximum: {
            Value: 86.0,
            Unit: "F",
            UnitType: 18,
          },
        },
        Day: {
          Icon: 4,
          IconPhrase: "Intermittent clouds",
          HasPrecipitation: false,
        },
        Night: {
          Icon: 40,
          IconPhrase: "Mostly cloudy w/ showers",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Light",
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/ph/madridejos/262718/daily-weather-forecast/262718?day=2&lang=en-us",
        Link: "http://www.accuweather.com/en/ph/madridejos/262718/daily-weather-forecast/262718?day=2&lang=en-us",
      },
      {
        Date: "2023-12-23T07:00:00+08:00",
        EpochDate: 1703286000,
        Temperature: {
          Minimum: {
            Value: 81.0,
            Unit: "F",
            UnitType: 18,
          },
          Maximum: {
            Value: 86.0,
            Unit: "F",
            UnitType: 18,
          },
        },
        Day: {
          Icon: 12,
          IconPhrase: "Showers",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Light",
        },
        Night: {
          Icon: 40,
          IconPhrase: "Mostly cloudy w/ showers",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Light",
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/ph/madridejos/262718/daily-weather-forecast/262718?day=3&lang=en-us",
        Link: "http://www.accuweather.com/en/ph/madridejos/262718/daily-weather-forecast/262718?day=3&lang=en-us",
      },
      {
        Date: "2023-12-24T07:00:00+08:00",
        EpochDate: 1703372400,
        Temperature: {
          Minimum: {
            Value: 81.0,
            Unit: "F",
            UnitType: 18,
          },
          Maximum: {
            Value: 84.0,
            Unit: "F",
            UnitType: 18,
          },
        },
        Day: {
          Icon: 7,
          IconPhrase: "Cloudy",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Light",
        },
        Night: {
          Icon: 12,
          IconPhrase: "Showers",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Light",
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/ph/madridejos/262718/daily-weather-forecast/262718?day=4&lang=en-us",
        Link: "http://www.accuweather.com/en/ph/madridejos/262718/daily-weather-forecast/262718?day=4&lang=en-us",
      },
      {
        Date: "2023-12-25T07:00:00+08:00",
        EpochDate: 1703458800,
        Temperature: {
          Minimum: {
            Value: 81.0,
            Unit: "F",
            UnitType: 18,
          },
          Maximum: {
            Value: 85.0,
            Unit: "F",
            UnitType: 18,
          },
        },
        Day: {
          Icon: 12,
          IconPhrase: "Showers",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Moderate",
        },
        Night: {
          Icon: 35,
          IconPhrase: "Partly cloudy",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Light",
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/ph/madridejos/262718/daily-weather-forecast/262718?day=5&lang=en-us",
        Link: "http://www.accuweather.com/en/ph/madridejos/262718/daily-weather-forecast/262718?day=5&lang=en-us",
      },
    ],
  };

  return (
    forecastMockData[locationKey] || {
      DailyForecasts: [],
    }
  );
}
