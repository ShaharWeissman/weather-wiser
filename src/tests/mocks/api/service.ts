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
      WeatherIcon: 4,
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

export async function getDailyForecast(locationKey: string, isMetric: boolean) {
  console.log({ locationKey, isMetric });

  const forecastMockData: { [key: string]: DailyForecast[] } = {
    "308526": isMetric
      ? [
          {
            Date: "2023-12-24T07:00:00+02:00",
            EpochDate: 1703394000,
            Temperature: {
              Minimum: {
                Value: 15.3,
                Unit: "C",
                UnitType: 17,
              },
              Maximum: {
                Value: 20.3,
                Unit: "C",
                UnitType: 17,
              },
            },
            Day: {
              Icon: 18,
              IconPhrase: "Rain",
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
              "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
            Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
          },
          {
            Date: "2023-12-25T07:00:00+02:00",
            EpochDate: 1703480400,
            Temperature: {
              Minimum: {
                Value: 12.9,
                Unit: "C",
                UnitType: 17,
              },
              Maximum: {
                Value: 21.6,
                Unit: "C",
                UnitType: 17,
              },
            },
            Day: {
              Icon: 2,
              IconPhrase: "Mostly sunny",
              HasPrecipitation: false,
            },
            Night: {
              Icon: 33,
              IconPhrase: "Clear",
              HasPrecipitation: false,
            },
            Sources: ["AccuWeather"],
            MobileLink:
              "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
            Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
          },
          {
            Date: "2023-12-26T07:00:00+02:00",
            EpochDate: 1703566800,
            Temperature: {
              Minimum: {
                Value: 15.4,
                Unit: "C",
                UnitType: 17,
              },
              Maximum: {
                Value: 24.0,
                Unit: "C",
                UnitType: 17,
              },
            },
            Day: {
              Icon: 1,
              IconPhrase: "Sunny",
              HasPrecipitation: false,
            },
            Night: {
              Icon: 33,
              IconPhrase: "Clear",
              HasPrecipitation: false,
            },
            Sources: ["AccuWeather"],
            MobileLink:
              "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
            Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
          },
          {
            Date: "2023-12-27T07:00:00+02:00",
            EpochDate: 1703653200,
            Temperature: {
              Minimum: {
                Value: 15.1,
                Unit: "C",
                UnitType: 17,
              },
              Maximum: {
                Value: 22.3,
                Unit: "C",
                UnitType: 17,
              },
            },
            Day: {
              Icon: 5,
              IconPhrase: "Hazy sunshine",
              HasPrecipitation: false,
            },
            Night: {
              Icon: 36,
              IconPhrase: "Intermittent clouds",
              HasPrecipitation: false,
            },
            Sources: ["AccuWeather"],
            MobileLink:
              "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
            Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
          },
          {
            Date: "2023-12-28T07:00:00+02:00",
            EpochDate: 1703739600,
            Temperature: {
              Minimum: {
                Value: 14.8,
                Unit: "C",
                UnitType: 17,
              },
              Maximum: {
                Value: 22.5,
                Unit: "C",
                UnitType: 17,
              },
            },
            Day: {
              Icon: 5,
              IconPhrase: "Hazy sunshine",
              HasPrecipitation: false,
            },
            Night: {
              Icon: 33,
              IconPhrase: "Clear",
              HasPrecipitation: false,
            },
            Sources: ["AccuWeather"],
            MobileLink:
              "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
            Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
          },
        ]
      : [
          {
            Date: "2023-12-24T07:00:00+02:00",
            EpochDate: 1703394000,
            Temperature: {
              Minimum: {
                Value: 57.0,
                Unit: "F",
                UnitType: 18,
              },
              Maximum: {
                Value: 68.0,
                Unit: "F",
                UnitType: 18,
              },
            },
            Day: {
              Icon: 18,
              IconPhrase: "Rain",
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
              "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
            Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
          },
          {
            Date: "2023-12-25T07:00:00+02:00",
            EpochDate: 1703480400,
            Temperature: {
              Minimum: {
                Value: 55.0,
                Unit: "F",
                UnitType: 18,
              },
              Maximum: {
                Value: 71.0,
                Unit: "F",
                UnitType: 18,
              },
            },
            Day: {
              Icon: 2,
              IconPhrase: "Mostly sunny",
              HasPrecipitation: false,
            },
            Night: {
              Icon: 33,
              IconPhrase: "Clear",
              HasPrecipitation: false,
            },
            Sources: ["AccuWeather"],
            MobileLink:
              "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
            Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
          },
          {
            Date: "2023-12-26T07:00:00+02:00",
            EpochDate: 1703566800,
            Temperature: {
              Minimum: {
                Value: 60.0,
                Unit: "F",
                UnitType: 18,
              },
              Maximum: {
                Value: 75.0,
                Unit: "F",
                UnitType: 18,
              },
            },
            Day: {
              Icon: 1,
              IconPhrase: "Sunny",
              HasPrecipitation: false,
            },
            Night: {
              Icon: 33,
              IconPhrase: "Clear",
              HasPrecipitation: false,
            },
            Sources: ["AccuWeather"],
            MobileLink:
              "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
            Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
          },
          {
            Date: "2023-12-27T07:00:00+02:00",
            EpochDate: 1703653200,
            Temperature: {
              Minimum: {
                Value: 59.0,
                Unit: "F",
                UnitType: 18,
              },
              Maximum: {
                Value: 74.0,
                Unit: "F",
                UnitType: 18,
              },
            },
            Day: {
              Icon: 5,
              IconPhrase: "Hazy sunshine",
              HasPrecipitation: false,
            },
            Night: {
              Icon: 36,
              IconPhrase: "Intermittent clouds",
              HasPrecipitation: false,
            },
            Sources: ["AccuWeather"],
            MobileLink:
              "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
            Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
          },
          {
            Date: "2023-12-28T07:00:00+02:00",
            EpochDate: 1703739600,
            Temperature: {
              Minimum: {
                Value: 59.0,
                Unit: "F",
                UnitType: 18,
              },
              Maximum: {
                Value: 73.0,
                Unit: "F",
                UnitType: 18,
              },
            },
            Day: {
              Icon: 5,
              IconPhrase: "Hazy sunshine",
              HasPrecipitation: false,
            },
            Night: {
              Icon: 33,
              IconPhrase: "Clear",
              HasPrecipitation: false,
            },
            Sources: ["AccuWeather"],
            MobileLink:
              "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
            Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
          },
        ],
  };

  return (
    forecastMockData[locationKey] || {
      DailyForecasts: [],
    }
  );
}

export const mockFavorites = [
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
];
