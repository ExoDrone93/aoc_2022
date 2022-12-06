const { readFileSync } = require('fs');

const readInstructions = () => {
  const contents = readFileSync('day6/input.txt', 'utf-8');
  const arr = contents.split(/\r?\n/).map(x => x.split(''));
  return arr;
};

const original = readInstructions();

const countInArray = (array, countThis) => {
  return array.filter(item => item == countThis).length;
}

const sum = (a, b) => a + b;

const detectMarkerAndmessage = (array, shift) => {
  let markerCount = 0;
  for (let index = 0; index < array[0].length - shift - 1; index++) {
    let subArray = array[0].slice(index, index + shift)
    const count = subArray.map(x => {
      return countInArray(subArray, x)
    }).reduce(sum)
    if (count == shift) {
      markerCount = index + shift
      break
    }
  };
  return markerCount
}

console.log('part1: ' + detectMarkerAndmessage(original, 4));
console.log('part2: ' + detectMarkerAndmessage(original, 14));
