'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     let output = `${firstName} You have ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millennial = true;
//       const firstName = 'Steven';
//       const str = `${firstName} you're a Millennial`;
//       console.log(str);
//     }
//     console.log(millennial);
//   }
//   printAge();
//   return age;
// }
// const firstName = 'Francy';
// calcAge(1993);
// var firstName = 'mati';

const fra = {
  firstName: 'fra',
  year: 1999,
  greet: () => {
    console.log(`Hey ${this.firstName}`);
  },
  calcAge: function () {
    console.log(2023 - this.year);
    // const that = this;
    // const isMillenial = function () {
    //   console.log(that.year >= 1981 && that.year <= 1996);
    // };
    // isMillenial();
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
};
// fra.calcAge();
// fra.greet();

// let age = 23;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//     name: 'Fra',
//     age: 23
// }

// const friend = me;
// friend.age = 24;

// console.log(friend);
// console.log(me);

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log(jessica, marriedJessica);

const jessica2 = {
  firstName: 'Jessica'
}