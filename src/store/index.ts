export const state = {
  cities: [
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
  ],
  locationDetails: {
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
  fiveDayForecast: {
    Headline: {
      EffectiveDate: "2023-12-22T19:00:00+08:00",
      EffectiveEpochDate: 1703242800,
      Severity: 5,
      Text: "Expect showers Friday evening",
      Category: "rain",
      EndDate: "2023-12-23T01:00:00+08:00",
      EndEpochDate: 1703264400,
      MobileLink:
        "http://www.accuweather.com/en/ph/madridejos/262718/daily-weather-forecast/262718?lang=en-us",
      Link: "http://www.accuweather.com/en/ph/madridejos/262718/daily-weather-forecast/262718?lang=en-us",
    },
    DailyForecasts: [
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
  },
  favorites: [
    {
      city: {
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
      locationDetails: {
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
    },
  ], // we need the KEY for the city and DATA for them! when we open favorite = name of city: once button fvaorite = we save the key ,
};
