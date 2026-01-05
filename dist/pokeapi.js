export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    constructor() { }
    async fetchLocations(pageURL) {
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
    async fetchLocation(locationName) {
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
