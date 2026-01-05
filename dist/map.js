export async function commandMap(state) {
    try {
        let res = await state.pokeapi.fetchLocations(state.nextLocationsURL);
        state.nextLocationsURL = res.next;
        state.prevLocationsURL = res.previous;
        for (const key of res.results) {
            console.log(key.name);
        }
    }
    catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
        console.error("Unkown Error");
    }
}
