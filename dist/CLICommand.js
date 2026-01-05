import { commandExit } from "./command_exit.js";
import { helpCommand } from "./command_help.js";
import { commandMap } from "./map.js";
export function getCommands() {
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
            description: "displays the names of 20 location areas in the Pokemon world",
            callback: commandMap,
        },
        // can add more commands here
    };
}
