let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = function (bills) {
    return bills >= 50 && bills >= 300 ? bills * 0.15 : bills * 0.2;
}
let i = 0;
while (i <= bills.length - 1) {
    tips[i] = calcTip(bills[i]);
    totals[i] = tips[i] + bills[i];
    console.log(`The total for this meal is ${totals[i]}, becuase the tip was ${tips[i]} and the bill was ${bills[i]}`);
    i++
}