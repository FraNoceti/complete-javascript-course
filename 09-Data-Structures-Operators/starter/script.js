'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (let flight of flights.split('+')) {
  let [which, from, to, time] = flight.split(';');
  let sentence = `${which.startsWith('_Delayed') ? '🔴' : ''}${which.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`;

  console.log(sentence.padStart(45));
}

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours,

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} delivery at ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `here's your delicious Pasta containing ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// console.log('Fra Noce'.split(' '));

// const [firstName, lastName] = 'Fra Noce'.split(' ');
// console.log(firstName);

// let newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   for (let n of names) namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   // for (let n of names) namesUpper.push(n[0].toUpperCase() + n.slice(1));
//   console.log(namesUpper.join(' '));
// };

// const pass = 'jessica ann smith davis';
// capitalizeName(pass);

// // padding
// const message = 'Go to gate 23';
// console.log(message.padStart(25, '*').padEnd(30, '-'));

// function maskCredit(number) {
//   const str = number + '';
//   const lasts = str.slice(-4);
//   return lasts.padStart(str.length, '*');
// }

// console.log(maskCredit(2345678923456789));
// console.log(maskCredit('3456234578905678'));

// const message2 = 'bad weather.. all departures delayed';
// console.log(message2.repeat(5));

// const planesInLine = function(n) {
//   console.log(`There are ${n} planes in line`+'✈'.repeat(n));
// }

// planesInLine(7)
// planesInLine(3)
// planesInLine(2)
// const question = new Map([
//   ['question', "what's the best prog. lang in the world?"],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct!💡'],
//   [false, "You're wrong!🫤"],
// ]);

// const airline = 'TAP Air portugal';
// console.log(airline.toUpperCase());
// console.log(airline.toLowerCase());

// const passenger = 'FraNcEsco';
// const passengerLow = passenger.toLowerCase();
// const passCorrect = passengerLow[0].toUpperCase() + passengerLow.slice(1);
// console.log(passCorrect);

// const fixName = function (name) {
//   let nameLow = name.toLowerCase();
//   let correctName = nameLow[0].toUpperCase() + nameLow.slice(1);
//   return correctName;
// };

// console.log(fixName('GiUsEpPe'));

// const email = 'hello@fra.noc';
// const loginEmail = 'Hello@Fra.Noc \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normEmail = loginEmail.toLowerCase().trim();
// console.log(normEmail);

// console.log(email === normEmail);

// const priceGB = '288,65£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement = 'All pass come to boarding door 23. Boarding door 23!';
// console.log(announcement.replaceAll('door', 'gate'));

// const plane = 'A320neo';
// console.log(plane.includes('A320'));

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   baggage.includes('knife') || baggage.includes('gun')
//     ? console.log("You're not allowed")
//     : console.log('Welcome onboard');
// };

// checkBaggage("I've a laptop, some food and a Knife");
// checkBaggage('Got some snacks and a gun for protection');
// checkBaggage('Socks and a camera');

// const airline = 'TAP Air portugal';
// const plane = 'A320';

// console.log(plane.length);
// console.log('B737'[0]);

// console.log(airline.indexOf('a'));
// console.log(airline.lastIndexOf('r'));

// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   console.log(
//     s === 'B' || s === 'E' ? 'You got middle seat 😬' : 'You got lucky 🍀'
//   );
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(question);

// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// for (let [key, val] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${val}`);
// }

// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(answer === question.get('correct')));
// console.log([...question.values()]);

// const rest = new Map();
// rest.set('name', 'Italian classic');
// rest.set(1, 'Firenze IT');
// rest.set(2, 'Lisbon POR');
// rest
//   .set('cat', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We open')
//   .set(false, 'We closed');
// console.log(rest);

// console.log(rest.get('name'));
// console.log(rest.get(1));

// const time = 10;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('cat'));
// rest.delete(2);
// // rest.clear();
// // rest.set([1, 2], 'test');
// rest.set(document.querySelector('h1'), 'heading');
// console.log(rest);

// const orderSets = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Riso'
// ])

// console.log(orderSets);

// console.log(new Set('franoceti'));

// console.log(orderSets.size);
// console.log(orderSets.has('Pizza'));
// orderSets.add('Garlic bread');
// orderSets.delete('Riso');
// console.log(orderSets);
// for (let order of orderSets) console.log(order);

// // Exmppl
// const staff = ['Waiter','Chef','Waiter','Manager'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We're open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// const vals = Object.values(openingHours);
// console.log(vals);

// // console.log(Object.entries(openingHours));
// const entries = Object.entries(openingHours);
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for(const day of days) {
//   let open = restaurant.openingHours[day]?.open ?? '!No Opening!';
//   console.log(`On ${day} we open at ${open}`);
// }

// console.log(restaurant.order?.(0,1) ?? 'Method doesnt exist');

// const users = [
//   {name: 'Jonas', email: 'jonas@hotmail.com'}
// ]

// console.log(users[0]?.email ?? 'User not exist');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (let [i, el] of menu.entries()){
//   console.log(`${i+1}: ${el}`);
// }

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del sole, 21',
//   mainIndex: 1,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del sole, 21',
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// let a = 12;
// let b = 99;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const arr = [7, 8, 9];
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArray);

// const newArr = [1, 2, ...arr];
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// const str = 'Jonas';
// let letters = [...str, '', 's'];

// console.log(letters);

// const ingredients = [
//   prompt("Let's make some pasta! Ingredient 1?"),
//   prompt("Let's make some pasta! Ingredient 2?"),
//   prompt("Let's make some pasta! Ingredient 3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// const newRestaurant = { foundedIn: 1981, ...restaurant };

// console.log(newRestaurant);
// let [main, second] = restaurant.categories;
// console.log(main, second);

// console.log(restaurant.order(2, 2));

// const [starter, mainCourse] = restaurant.order(2, 2);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];

// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);

// const add = function (...numbers) {
//   // console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// const x = [23,5,9];
// add(...x);

// restaurant.orderPizza('fra','gio','noce')

// const guests1 = restaurant.numGuests? restaurant.numGuests : 10;

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// }

// const rest2 = {
//   name: 'PIAZZA',
//   owner: 'Giovanni Rossi',
// }

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);
