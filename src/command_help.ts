import type { State } from "./state";
export async function helpCommand(state: State): Promise<void> {
  let welcomeMessage = `

Welcome to the Pokedex!
Usage:

`;
  for (const command in state.registry) {
    let commandNameAndDesc = `${state.registry[command].name}: ${state.registry[command].description}`;
    welcomeMessage += commandNameAndDesc;
    welcomeMessage += "\n";
  }
  console.log(welcomeMessage);
}
