const { readFileSync } = require('fs');

const readFile = () => {
  const contents = readFileSync('day4/input.txt', 'utf-8');
  const arr = contents.split(/\r?\n/).map(x => x.split(/,|-/));
  return arr;
};

const original = readFile();

//part1
const shiftTotalOverlap = (array) => {
  let overlapTotal = 0;
  array.map((a) => {
    if ((Number(a[0]) <= Number(a[2]) && Number(a[1]) >= Number(a[3])) ||
      (Number(a[2]) <= Number(a[0]) && Number(a[3]) >= Number(a[1]))) {
      overlapTotal += 1;
    };
  });
  return overlapTotal;
};

console.log(shiftTotalOverlap(original));

//part2
const shiftOverlap = (array) => {
  let overlapTotal = 0;
  array.map((a) => {
    if (((Number(a[2]) >= Number(a[0]) && Number(a[2]) <= Number(a[1]))) ||
      ((Number(a[0]) >= Number(a[2]) && Number(a[0]) <= Number(a[3])))) {
      overlapTotal += 1;
    };
  });
  return overlapTotal;
};

console.log(shiftOverlap(original));
