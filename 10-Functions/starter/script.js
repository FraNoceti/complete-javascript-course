'use strict';
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 / numPassengers
// ) {
//   //   numPassengers ||= 1;
//   //   price ||= 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 120);
// createBooking('LH123', undefined, 150);

// console.log(bookings);

// const flight = 'LH234';
// const franci = {
//   name: 'Francesco Noceti',
//   passport: 574780936278,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   passenger.passport === 574780936278
//     ? alert('Checked in')
//     : alert('wrong pass');
// };

// // checkIn(flight, franci);
// // console.log(flight);
// // console.log(franci);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(franci);
// checkIn(flight, franci);

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
const transformer = function (str, fn) {
  console.log(`Transformed str: ${fn(str)}`);
  console.log(`Trasformed by ${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

function highFive() {
  console.log('🖐🏻');
}

document.body.addEventListener('click', highFive);

const printFra = function () {
  console.log('Fra');
};

document.body.addEventListener('click', printFra);
