import { Cache } from "./pokecache.js";
export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    cache;
    constructor() {
        this.cache = new Cache(10_000);
    }
    async fetchLocations(pageURL) {
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
    async fetchLocation(locationName) {
        let url = `https://pokeapi.co/api/v2/location-area/${locationName}`;
        if (this.cache.get(url))
            return this.cache.get(url);
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
