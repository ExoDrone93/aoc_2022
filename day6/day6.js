const { readInstructions } = require('../Utils/readFile.js');

const original = readInstructions('day6/input.txt').map(x => x.split(''));;

const countInArray = (array, countThis) => {
  return array.filter(item => item == countThis).length;
};

const sum = (a, b) => a + b;

const detectMarkerAndmessage = (array, shift) => {
  let markerCount = 0;
  for (let index = 0; index < array[0].length - shift - 1; index++) {
    let subArray = array[0].slice(index, index + shift);
    const count = subArray.map(x => {
      return countInArray(subArray, x)
    }).reduce(sum);
    if (count == shift) {
      markerCount = index + shift
      break
    };
  };
  return markerCount;
};

console.log('part1: ' + detectMarkerAndmessage(original, 4));
console.log('part2: ' + detectMarkerAndmessage(original, 14));
