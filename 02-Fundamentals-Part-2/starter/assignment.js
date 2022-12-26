"use strict";

// Val & Var
// const country = 'Italy';
// const continent = 'Europe';
// let population = 13;

// console.log(country, continent, population);

// Data types
// const isIsland = false;
// const language = 'Italian';

// console.log(typeof isIsland)
// console.log(typeof population)
// console.log(typeof country)
// console.log(typeof language);

// population++;
// console.log(population);

// let populationFinland = 6;
// console.log(population>populationFinland);

// const averagePop = 33;

// console.log(population<averagePop);

// let description = 'Italy is in Europe, and its 61 million people speak Italian';

// let newDescription = `${country} is in ${continent}, and its ${population} million people speaks ${language}`;

// console.log(newDescription);

// if (population > averagePop) {
//     let aboveAvg = population - averagePop;
//     console.log(`${country} popoulation is ${aboveAvg} million above average.`)
// } else {
//     let belowAvg = averagePop - population;
//     console.log(`${country} population is ${belowAvg} million below average.`)
// }

// let numNeughbours = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeughbours === 1) {
//     console.log('Only one border!')
// } else if (numNeughbours > 1) {
//     console.log('Many borders!')
// } else {
//     console.log('No borders.')
// }

// if (language === 'English' && population<50 && !isIsland) {
//     console.log(`You should live in ${country}!`)
// } else {
//     console.log(`${country} doesn't meet your criteria.`)
// }

// switch (language) {
//     case 'Mandarin':
//         console.log('MOST number of native speakers!');
//         break;
//     case 'Spanish':
//         console.log('2nd place in number of native speakers');
//         break;
//     case 'English':
//         console.log('3rd place');
//         break;
//     case 'Italian':
//         console.log('Like only you and your friends use it.')
//         break;
//     default:
//         console.log('where u from?');
// }

// const above33 = population>33 ? `${country}'s population is above average!` : `${country}'s population is below average.`;
// console.log(above33);

// function describeCountry(country, popoulation, capitalCity) {
//     const sentence = `${country} has ${popoulation} million people and its capital city is ${capitalCity}`;
//     return sentence;
// }

// const italy = describeCountry('Italy', 61, 'Rome');
// const spain = describeCountry('Spain', 47, 'Madrid');
// const france = describeCountry('France', 67, 'Paris');
// console.log(italy, spain, france);

// function percetnageOfWorld1(population) {
//     return population/7900*100;
// }

// let china = percetnageOfWorld1(1441);
// let italia = percetnageOfWorld1(61);
// let spagna = percetnageOfWorld1(48);
// console.log(china,italia,spagna);

// const percetnageOfWorld2 = function (popoulation) {
//     return popoulation/7900*100;
// }

// let china1 = percetnageOfWorld2(1441);
// let italia1 = percetnageOfWorld2(61);
// let spagna1 = percetnageOfWorld2(48);
// console.log(china1,italia1,spagna1);

const percetnageOfWorld3 = (population) => (population / 7900) * 100;

// let china2 = percetnageOfWorld2(1441);
// let italia2 = percetnageOfWorld2(61);
// let spagna2 = percetnageOfWorld2(48);
// console.log(china2,italia2,spagna2);

// const describePopulation = (country, population) => {
//     const perc = percetnageOfWorld3(population)
//     return `${country} has ${population} million people, wich is about ${perc}% of the world.`
// }

// const italia = describePopulation('Italia', 61);
// const china = describePopulation('China', 1441);
// const spain = describePopulation('Spain', 48);
// console.log(italia, china, spain);

// console.log(popoulation.length === 4);

// const percentages = [percetnageOfWorld3(61), percetnageOfWorld3(1441), percetnageOfWorld3(48), percetnageOfWorld3(67)];
// console.log(percentages);

// let neighbours = ['france', 'switzerland', 'austria', 'slovenia'];
// neighbours.push('utopia');
// neighbours.pop();
// console.log(neighbours);
// if (!neighbours.includes('germania')) {
//     console.log('Probably not a central European country :D')
// }
// neighbours[neighbours.indexOf('switzerland')] = 'Canton ticino';
// console.log(neighbours);

const myCountry = {
  country: "Italy",
  capital: "Rome",
  language: "Italian",
  population: 61,
  neighbours: ["France", "Austria", "Switzerland", "Slovenia"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    // this.isIsland = !Boolean(this.neighbours.length);
  },
};

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// myCountry.population += 2;
// console.log(myCountry.population);

// myCountry['population'] -= 2;
// console.log(myCountry.population);

// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry.isIsland);

// for (let vote = 1; vote <= 50; vote++) {
//     console.log(`Voter n.${vote} is currently voting.`)
// }

const popoulations = [61, 1441, 48, 67];
let percentages2 = [];

for (let i = 0; i < popoulations.length; i++) {
  percentages2[i] = percetnageOfWorld3(popoulations[i]);
}
// console.log(percentages2);

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   console.log(listOfNeighbours[i]);
//   for (let k = 0; k < listOfNeighbours[i].length; k++) {
//     console.log(`Neighbour: ${listOfNeighbours[i][k]}`);
//   }
// }

const percentages3 = [];
let i = 0;
while (i < popoulations.length) {
    percentages3[i] = percetnageOfWorld3(popoulations[i]);
    i++;
}
console.log(percentages3);