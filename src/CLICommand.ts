import { commandExit } from "./command_exit.js";
import { helpCommand } from "./command_help.js";
export type CLICommand = {
  name: string;
  description: string;
  callback: (commands: Record<string, CLICommand>) => void;
};
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
    // can add more commands here
  };
}
