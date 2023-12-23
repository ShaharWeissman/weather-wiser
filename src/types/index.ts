export interface City {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  Country: {
    ID: string;
    LocalizedName: string;
  };
  AdministrativeArea: {
    ID: string;
    LocalizedName: string;
  };
}

export interface CitiesState {
  cities: City[];
  selectedCity: City | null;
  loading: boolean;
  error: string | null;
}
