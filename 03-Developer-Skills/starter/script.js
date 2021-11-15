// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*const x = "23";
if (x == 23) console.log(23);
const calcAge = (birthYear) => 2020 - birthYear;
console.log("testing");


//Find the diffrence between the highest and lowest temperatures
//Skip errors

const temperatures = [3, -2, 6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const clacTempAmplitude = function (temperatures) {
  let highTemp = temperatures[0];
  let lowTemp = temperatures[0];
  for (let i = 0; i <= temperatures.length - 1; i++) {
    if (temperatures[i] > highTemp && temperatures[i] != "error") {
      highTemp = temperatures[i];
    }
  }

  for (let i = 0; i <= temperatures.length - 1; i++) {
    if (temperatures[i] < lowTemp && temperatures[i] != "error") {
      lowTemp = temperatures[i];
    }
  }
  console.log(highTemp, lowTemp);
  return highTemp - lowTemp;
};

console.log(clacTempAmplitude(temperatures));

//Same function with two arary concat
const clacTempAmplitudeNew = function (t1, t2) {
  const temperatures = t1.concat(t2);
  let highTemp = temperatures[0];
  let lowTemp = temperatures[0];
  for (let i = 0; i <= temperatures.length - 1; i++) {
    if (temperatures[i] > highTemp && temperatures[i] != "error") {
      highTemp = temperatures[i];
    }
  }

  for (let i = 0; i <= temperatures.length - 1; i++) {
    if (temperatures[i] < lowTemp && temperatures[i] != "error") {
      lowTemp = temperatures[i];
    }
  }
  console.log(highTemp, lowTemp);
  return highTemp - lowTemp;
};

console.log(clacTempAmplitudeNew([3, 5, 7], [5, 7, 3]));


const measureKelvin = function () {
  const measuremnt = {
    type: "temp",
    unit: "celsius",

    // C) FIX
    value: Number(prompt("Degrees in Celsius")),
  };
  const kelvin = measuremnt.value + 273;
  console.table(measuremnt);
  return kelvin;
};

console.log(measureKelvin());
*/
