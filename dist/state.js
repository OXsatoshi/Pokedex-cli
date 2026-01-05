import { createInterface } from "readline";
import { getCommands } from "./CLICommand.js";
import { PokeAPI } from "./pokeapi.js";
export function initState() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    let listOfCommand = getCommands();
    return {
        rl,
        registry: listOfCommand,
        pokeapi: new PokeAPI(),
        prevLocationsURL: null,
        nextLocationsURL: "https://pokeapi.co/api/v2/location/",
    };
}
