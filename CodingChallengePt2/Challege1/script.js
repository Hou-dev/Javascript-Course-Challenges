function clacAverage(score1, score2, score3) {
    let avg = (score1 + score2 + score3) / 3
    return avg;
}

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas) {
        console.log(`The winner is Dolphins ${avgDolphins} vs ${avgKoalas}`);
    } else if (avgDolphins === avgKoalas) {
        console.log('We have a tie')
    } else {
        console.log(`The winner is Koalas ${avgKoalas} vs ${avgDolphins}`);
    }
}

const avgDolphins = clacAverage(44, 23, 71);
const avgKoalas = clacAverage(65, 54, 49);

checkWinner(avgDolphins, avgKoalas);