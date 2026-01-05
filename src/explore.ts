import type { State } from "./state";
export async function explore(state: State, ...args: string[]): Promise<void> {
  try {
    let displayesList = `
Exploring ${args[0]}...
Found Pokemon:
`;
    let res = await state.pokeapi.fetchLocation(args[0]);
    for (const key of res.pokemon_encounters) {
      displayesList += ` - ${key.pokemon.name}\n`;
    }
    console.log(displayesList.trim());
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
    console.error("Unkown Error");
  }
}
