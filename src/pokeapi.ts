import { Cache } from "./pokecache.js";
export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  cache;
  constructor() {
    this.cache = new Cache(10_000);
  }

  async fetchLocations(pageURL: string): Promise<ShallowLocations> {
    if (this.cache.get(pageURL)) {
      return this.cache.get(pageURL).val;
    }
    let res = await fetch(pageURL, {
      method: "GET",
      headers: {
        "Content-Type": "appolication/json",
      },
    });
    if (!res.ok) {
      throw Error("Failed to fetch location.");
    }
    let data = await res.json();
    this.cache.add(pageURL, { val: data, createdAt: Date.now() });

    return data;
  }

  async fetchLocation(locationName: string): Promise<Location> {
    let url = `https://pokeapi.co/api/v2/location-area/${locationName}`;
    if (this.cache.get(url)) return this.cache.get(url);
    let res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "appolication/json",
      },
    });
    if (!res.ok) {
      throw Error("Failed to fetch location.");
    }
    let data = await res.json();
    this.cache.add(url, { val: data, createdAt: Date.now() });
    return data;
  }
}

type ShallowLocations = {
  count: number;
  next: string;
  previous: string | null;
  results: { name: string; url: string }[];
};

export interface Location {
  encounter_method_rates: { name: string; url: string };
  game_index: number;
  id: number;
  location: { name: string; url: string };
  name: string;
  names: Name[];
  pokemon_encounters: PokemonEncounter[];
}

interface VersionDetail {
  rate: number;
  version: Version;
}

interface Version {
  name: string;
  url: string;
}

interface Name {
  language: Language;
  name: string;
}

interface Language {
  name: string;
  url: string;
}

interface PokemonEncounter {
  pokemon: { name: string; url: string };
  version_details: VersionDetail2[];
}

interface VersionDetail2 {
  encounter_details: EncounterDetail[];
  max_chance: number;
  version: Version2;
}

interface EncounterDetail {
  chance: number;
  condition_values: any[];
  max_level: number;
  method: Method;
  min_level: number;
}

interface Method {
  name: string;
  url: string;
}

interface Version2 {
  name: string;
  url: string;
}
