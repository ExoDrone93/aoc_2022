const { readInstructions } = require('../Utils/readFile.js');

const original = readInstructions('day4/input.txt').map(x => x.split(/,|-/));

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
// more elegant solution is an if like: Number(a[0]) <= Number(a[3]) && Number(a[1]) >= Number(a[2])
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
