import { commandExit } from "./command_exit.js";
import { helpCommand } from "./command_help.js";
import { commandMap } from "./map.js";
import { commandMapb } from "./mapb.js";
import { CLICommand } from "./state.js";
import { explore } from "./explore.js";
export function getCommands(): Record<string, CLICommand> {
  return {
    help: {
      name: "help",
      description: "Displays a help message",
      callback: helpCommand,
    },
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    map: {
      name: "map",
      description:
        "displays the names of 20 location areas in the Pokemon world",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "displays the previous 20 locations. It's a way to go back.",
      callback: commandMapb,
    },
    // can add more commands here

    explore: {
      name: "explore",
      description: "display a list of all Pokemon in an area",
      callback: explore,
    },
  };
}
