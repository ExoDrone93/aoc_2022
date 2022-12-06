const { readInstructions } = require('../Utils/readFile.js');

const original = readInstructions('day3/input.txt');

//part1
const aplhabetValues = {
  a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21,
  v: 22, w: 23, x: 24, y: 25, z: 26, A: 27, B: 28, C: 29, D: 30, E: 31, F: 32, G: 33, H: 34, I: 35, J: 36, K: 37, L: 38, M: 39, N: 40,
  O: 41, P: 42, Q: 43, R: 44, S: 45, T: 46, U: 47, V: 48, W: 49, X: 50, Y: 51, Z: 52
};

const splitting = (array) => {
  const newSplitted = [];
  array.map(a => {
    const splitAt = a.length * 0.5;
    const newText = a.slice(0, splitAt) + ' ' + a.slice(splitAt);
    newSplitted.push(newText);
  });
  return newSplitted;
};


const twoPocket = splitting(original).map(x => x.split(' '));

const common = (pockets) => {
  const commonChars = [];
  pockets.map(([a, b]) => {
    const pocket1 = new Set(a.split(''));
    const pocket2 = new Set(b.split(''));
    for (let char of pocket1.values()) {
      if (pocket2.has(char)) commonChars.push(char);
    };
  });
  return commonChars;
};

const sum = (a, b) => a + b;

//using charCode
console.log(common(twoPocket).map(x => x.search(/[a-z]/) != -1 ? x.charCodeAt(0) - 96 : x.charCodeAt(0) - 38).reduce(sum));

//using predefinied dictionary of letter values
console.log(common(twoPocket).map(x => aplhabetValues[x]).reduce(sum));


//part2
const elfGroups = (array) => {
  const groups = [];
  const repeat = original.length / 3;
  for (let index = 0; index < repeat; index++) {
    let separate = array.splice(0, 3);
    groups.push(separate);
  }
  return groups;
};

const elfsByGroup = elfGroups(original);

const badges = (array) => {
  groupBadges = [];
  array.map(([a, b, c]) => {
    const sack1 = new Set(a.split(''));
    const sack2 = new Set(b.split(''));
    const sack3 = new Set(c.split(''));
    for (let char of sack1.values()) {
      if (sack2.has(char) & sack3.has(char)) {
        groupBadges.push(char);
      }
    };
  });
  return groupBadges;
};

//using charCode
console.log(badges(elfsByGroup).map(x => x.search(/[a-z]/) != -1 ? x.charCodeAt(0) - 96 : x.charCodeAt(0) - 38).reduce(sum));

//using predefinied dictionary of letter values
console.log(badges(elfsByGroup).map(x => aplhabetValues[x]).reduce(sum));
