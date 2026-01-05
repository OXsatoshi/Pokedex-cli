import type { State } from "./state";
export async function commandMap(state: State): Promise<void> {
  try {
    let res = await state.pokeapi.fetchLocations(state.nextLocationsURL);
    state.prevLocationsURL = state.nextLocationsURL;
    state.nextLocationsURL = res.next;
    for (const key of res.results) {
      console.log(key.name);
    }
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
    console.error("Unkown Error");
  }
}
