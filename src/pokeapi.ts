export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL: string): Promise<ShallowLocations> {
    let res = await fetch(pageURL, {
      method: "GET",
      headers: {
        "Content-Type": "appolication/json",
      },
    });
    if (!res.ok) {
      throw Error("Failed to fetch location.");
    }
    return res.json();
  }

  async fetchLocation(locationName: string): Promise<Location> {
    let res = await fetch(locationName, {
      method: "GET",
      headers: {
        "Content-Type": "appolication/json",
      },
    });
    if (!res.ok) {
      throw Error("Failed to fetch location.");
    }
    return res.json();
  }
}

type ShallowLocations = {
  count: number;
  next: string;
  previous: string | null;
  results: { name: string; url: string }[];
};
export interface Location {
  areas: { name: string; url: string }[];
  game_indices: {
    game_index: number;
    generation: { name: string; url: string };
  }[];
  id: number;
  name: string;
  names: Name[];
  region: Region;
}
interface Name {
  language: Language;
  name: string;
}
interface Language {
  name: string;
  url: string;
}

interface Region {
  name: string;
  url: string;
}
