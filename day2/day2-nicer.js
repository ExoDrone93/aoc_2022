const { readFileSync } = require('fs');

const readFile = () => {
  const contents = readFileSync('day2/input.txt', 'utf-8');
  const arr = contents.split(/\r?\n/).map(x => x.split(' '));
  return arr;
};

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

const matches = readFile();

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
  matches.map(([a,b]) => finalResults[a][b]).reduce(sum)
);
