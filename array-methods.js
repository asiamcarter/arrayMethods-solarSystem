const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
let planetSection = document.querySelector("#planets");
planets.forEach(planet => {
    planetSection.innerHTML +=`
    <h2>${planet}</h2>
    <hr/>
    `
})

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/


let newPlanetArray=[];
const planetsArray = planets.map(planet => {

    newPlanetArray.push(planet.charAt(0).toUpperCase() + planet.substr(1))

    return newPlanetArray;
})
console.log(newPlanetArray)



/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const ePlanets = planets.filter(planet => {
    let ePlanet = false;

        if (planet.includes("e")) {
            ePlanet = true;
          }
            return ePlanet;
})
console.log(ePlanets)