const { readFileSync } = require('fs');

const readFile = () => {
  const contents = readFileSync('day1/input.txt', 'utf-8');
  const arr = contents.split(/\r?\n/).map(x => Number(x))
  return arr;
};

const original = readFile();

function getAllIndexes(arr, val) {
  var indexes = [], i;
  for (i = 0; i < arr.length; i++)
    if (arr[i] === val)
      indexes.push(i);
  return indexes;
}

function chunk(items) {
  const chunks = [];
  items = [].concat(...items)
  const origianlCount = getAllIndexes(original, 0).length;
  for (let index = 0; index < origianlCount; index++) {
    let pushes = items.splice(0, items.indexOf(0) + 1);
    push = pushes.pop();
    chunks.push(
      pushes
    );
  };
  return chunks;
};

const afterpush = chunk(original).map(
  x => x.reduce((partialSum, a) => partialSum + a, 0)
);

const sortedArr = afterpush.sort(function(a, b) {
  return a - b;
}).reverse();

//part1
console.log(sortedArr[0]);

//part2
console.log(sortedArr[0]+sortedArr[1]+sortedArr[2]);
