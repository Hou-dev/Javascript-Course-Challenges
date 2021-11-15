let tip;
let x = 430;

x >= 50 && x <= 300 ? tip = x * 0.15 : tip = x * 0.2
console.log(`The bill is ${x}, the tip was ${tip}, and the total value ${x + tip}`);

