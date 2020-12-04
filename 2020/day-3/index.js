const input = require('./input.js')
const sample = `
..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#
`

const formattedInput = input.split('\n').filter(Boolean)
const biomeLength = formattedInput[0].length;

const valueAtPath31 = formattedInput.map((biomeX, index) => {
  return biomeX[index * 3 % biomeLength]
})
const valueAtPath11 = formattedInput.map((biomeX, index) => {
  return biomeX[index % biomeLength]
})
const valueAtPath51 = formattedInput.map((biomeX, index) => {
  return biomeX[index * 5 % biomeLength]
})
const valueAtPath71 = formattedInput.map((biomeX, index) => {
  return biomeX[index * 7 % biomeLength]
})
const valueAtPath12 = formattedInput.filter((v, index) => !(index%2))
  .map((biomeX, index) => {
    return biomeX[index % biomeLength]
  })

console.log(valueAtPath31.map(val => val=='#').filter(Boolean).length)

const treesInPath = [
  valueAtPath11,
  valueAtPath31,
  valueAtPath51,
  valueAtPath71,
  valueAtPath12,
].map(path => path.map(val => val=='#').filter(Boolean).length)

console.log(treesInPath);
console.log(treesInPath.reduce((mul, v) => mul * v, 1));

