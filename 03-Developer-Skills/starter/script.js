// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcAmplitude = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcAmplitude([3, 1, 5], [-4, 7, 22]);
// console.log(amplitude);

// Forecast application
//  How to print temperatures?

const f1 = [17, 21, 23];
const f2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let forecast = [];
  let day = 1;
  for (let i = 0; i < arr.length; i++) {
    forecast[i] = `${arr[i]}° in ${day} days`;
    day++;
  }
  return forecast.join(' ... ')
};

console.log('...'+printForecast(f2));
