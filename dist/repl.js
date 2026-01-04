import { createInterface } from "node:readline";
import { getCommands } from "./CLICommand.js";
//The purpose of this function is to split user input
//base on whitespaces
//
let listOfCommand = getCommands();
export function cleanInput(input) {
    let result = input.trim().toLowerCase().split(" ");
    result = result.filter((item) => item !== "");
    return result;
}
export function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    rl.prompt();
    rl.on("line", (input) => {
        let userInput = cleanInput(input);
        if (userInput.length === 0) {
            rl.prompt();
        }
        else {
            let command = searchForCommand(userInput[0]);
            if (command !== "Unknown command") {
                listOfCommand[command].callback(listOfCommand);
            }
            else {
                console.log("Unknown command");
            }
            rl.prompt();
        }
    });
}
function searchForCommand(cmd) {
    for (const key in listOfCommand) {
        if (key === cmd) {
            return listOfCommand[key].name;
        }
    }
    return "Unknown command";
}
