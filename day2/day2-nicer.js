const { readInstructions } = require('../Utils/readFile.js');

//part1
const myValues = {
  X: 1,
  Y: 2,
  Z: 3
};

const results = {
  A: { X: 3, Y: 6, Z: 0 },
  B: { X: 0, Y: 3, Z: 6 },
  C: { X: 6, Y: 0, Z: 3 },
};

const sum = (a, b) => a + b;

const matches = readInstructions('day2/input.txt').map(x => x.split(' '));

console.log(
  matches.map(([a, b]) => results[a][b] + myValues[b]).reduce(sum)
);

//part2
const finalResults = {
  A: { X: 3, Y: 4, Z: 8 },
  B: { X: 1, Y: 5, Z: 9 },
  C: { X: 2, Y: 6, Z: 7 },
};

console.log(
  matches.map(([a, b]) => finalResults[a][b]).reduce(sum)
);
