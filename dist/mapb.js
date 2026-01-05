export async function commandMapb(state) {
    if (state.prevLocationsURL === null)
        console.log("you're on the first page");
    else {
        try {
            let res = await state.pokeapi.fetchLocations(state.prevLocationsURL);
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
}
