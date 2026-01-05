import { createInterface, type Interface } from "readline";
import { getCommands } from "./CLICommand.js";
import { PokeAPI } from "./pokeapi.js";
export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};
export type State = {
  rl: Interface;
  pokeapi: PokeAPI;
  nextLocationsURL: string;
  prevLocationsURL: string | null;
  registry: Record<string, CLICommand>;
};
export function initState(): State {
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
