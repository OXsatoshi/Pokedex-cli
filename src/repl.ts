import { createInterface } from "node:readline";
import { getCommands } from "./CLICommand.js";
import type { State } from "./state.js";
import { helpCommand } from "./command_help.js";
import { commandExit } from "./command_exit.js";
//The purpose of this function is to split user input
//base on whitespaces
//

let listOfCommand = getCommands();
export function cleanInput(input: string): string[] {
  let result = input.trim().toLowerCase().split(" ");
  result = result.filter((item) => item !== "");
  return result;
}

export async function startREPL(state: State): Promise<void> {
  const rl = state.rl;

  rl.prompt();
  rl.on("line", async (input) => {
    let userInput = cleanInput(input);
    if (userInput.length === 0) {
      rl.prompt();
    } else {
      let command = searchForCommand(userInput[0]);
      if (command !== "Unknown command") {
        await listOfCommand[command].callback(state, userInput[1]);
      } else {
        console.log("Unknown command");
      }
      rl.prompt();
    }
  });
}
function searchForCommand(cmd: string): string {
  for (const key in listOfCommand) {
    if (key === cmd) {
      return listOfCommand[key].name;
    }
  }
  return "Unknown command";
}
