export async function helpCommand(state) {
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
