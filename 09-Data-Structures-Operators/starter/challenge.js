'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// document.body.append(document.createElement('textarea'));

// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   console.log(text);
//   const strings = text.split('\n');
//   console.log(strings);
//   for (let [key, string] of strings.entries()) {
//     const [first, second] = string.toLowerCase().trim().split('_');
//     let output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     let final = output.padEnd(20, ' ') + '✅'.repeat(key + 1);
//     console.log(final);
//   }
// });

// // 1
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3
// console.log(
//   `An event has happened, on average, every ${92 / gameEvents.size} minutes.`
// );

// // 4
// for (let [key, event] of gameEvents) {
//   console.log(
//     key <= 45
//       ? `[FIRST HALF] ${key}: ${event}`
//       : `[SECOND HALF] ${key}: ${event}`
//   );
// }

// const [player1, player2] = game.players;
// console.log(player1, player2);

// const [gk, ...fieldPlayers] = player1;
// console.log(gk, fieldPlayers);

// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

// const player1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(player1Final);

// const { team1, x : draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// const printGoals = function(...players) {
//     console.log(`${players.length} goals were scored`);
// }

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// team1 < team2 && console.log('1 is more likely to win');

// N1
// for (let [num, plrs] of game.scored.entries()) {
//   console.log(`Goal ${num + 1}: ${plrs}.`);
// }
// // Number 2
// const odds = Object.values(game.odds);
// let average = 0;
// for (let odd of odds) {
//   average += odd;
// }
// average /= odds.length;
// console.log(average);
// console.log(Object.entries(game.odds));
// // N3
// for (let [who, odd] of Object.entries(game.odds)) {
//   let whoStr = who === 'x' ? 'draw' : `victory ${game[who]}`;
//   console.log(`Odd of ${whoStr}: ${odd}`);
// }
// // Bonus
// let scorers = {};

// for (let player of game.scored)
// scorers[player] ? scorers[player]++ : scorers[player] = 1;

// console.log(scorers);
