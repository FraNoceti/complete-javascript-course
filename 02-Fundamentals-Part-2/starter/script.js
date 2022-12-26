"use strict";

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: false,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old teacher and he has ${this.hasDriversLicense ? 'a' : 'not a'} driver's license.`;
  }
};

// console.log(jonas.getSummary());
