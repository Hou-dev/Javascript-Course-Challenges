let avgDolphin = (96 + 108 + 89) / 3
let avgKoalas = (96 + 108 + 89) / 3

let highDolphin = avgDolphin > avgKoalas

if (highDolphin) {
    console.log(`Dolphin has a higher avg of ${avgDolphin}`)
} else if (avgDolphin == avgKoalas) {
    console.log(`We have equal averages ${avgDolphin}`)
} else {
    console.log(`Koalas have higher average ${avgKoalas}`)
}