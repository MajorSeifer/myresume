function exerciseSpaceAge() {
    let inputAge = prompt("Please enter your age in seconds");
    let inputPlanet = prompt("Please enter a planet between Mercury, Venus, Earth, Mars or Jupiter").toLowerCase();
    spaceAge(inputAge, inputPlanet);
}

function spaceAge(numberOfSeconds, planet) {
    let ageOnPlanet = null;
    let earthDays = 365.25;
    let mercuryYearsEarth = 0.2408467;
    let venusYearsEarth = 0.61519726;
    let earthYear = 1;
    let marsYearsEarth = 1.8808158;
    let jupiterYearsEarth = 11.862615;

    switch (planet) {
        case "mercury":
            ageOnPlanet = (numberOfSeconds / ((earthDays * mercuryYearsEarth) * 24 * 60 * 60)).toFixed(2);
            alert("Your age on " + planet.charAt(0).toUpperCase() + planet.slice(1) + " is " + ageOnPlanet + " years");
            break;

        case "venus":
            ageOnPlanet = (numberOfSeconds / ((earthDays * venusYearsEarth) * 24 * 60 * 60)).toFixed(2);
            alert("Your age on " + planet.charAt(0).toUpperCase() + planet.slice(1) + " is " + ageOnPlanet + " years");
            break;

        case "earth":
            ageOnPlanet = (numberOfSeconds / ((earthDays * earthYear) * 24 * 60 * 60)).toFixed(2);
            alert("Your age on " + planet.charAt(0).toUpperCase() + planet.slice(1) + " is " + ageOnPlanet + " years");
            break;

        case "mars":
            ageOnPlanet = (numberOfSeconds / ((earthDays * marsYearsEarth) * 24 * 60 * 60)).toFixed(2);
            alert("Your age on " + planet.charAt(0).toUpperCase() + planet.slice(1) + " is " + ageOnPlanet + " years");
            break;

        case "jupiter":
            ageOnPlanet = (numberOfSeconds / ((earthDays * jupiterYearsEarth) * 24 * 60 * 60)).toFixed(2);
            alert("Your age on " + planet.charAt(0).toUpperCase() + planet.slice(1) + " is " + ageOnPlanet + " years");
            break;
    }
}