export function helpCommand(commnds) {
    let welcomeMessage = `

Welcome to the Pokedex!
Usage:

`;
    for (const command in commnds) {
        let commandNameAndDesc = `${commnds[command].name}: ${commnds[command].description}`;
        welcomeMessage += commandNameAndDesc;
        welcomeMessage += "\n";
    }
    console.log(welcomeMessage);
}
