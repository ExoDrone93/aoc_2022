const { readFileSync } = require('fs');

const readInstructions = () => {
  const contents = readFileSync('day5/input-instructions.txt', 'utf-8');
  const arr = contents.split(/\r?\n/).map(x => x.split(/ /));
  return arr;
};

const readInitialState = () => {
  const contents = readFileSync('day5/input-stacks.txt', 'utf-8');
  const arr = contents.split(/\r?\n/);
  return arr;
};

const initialStacks = readInitialState();
const instructions = readInstructions();

const getInput = (array) => {
  const inputs = [];
  for (let x = 0; x < array.length; x++) {
    for (let y = 1; y < array[x].length; y += 4) {
      if (inputs[x] == null) {
        inputs.push([]);
      };
      if (array[x].charAt(y) !== '') {
        inputs[x].push(array[x].charAt(y));
      };
    };
  };
  return inputs;
};

const linesOfInput = getInput(initialStacks);

const columnsToArrays = (array) => {
  const inputsInLines = [];
  for (let x = 0; x < array.length; x++) {
    for (let y = 0; y < array[x].length; y++) {
      if (inputsInLines[y] == null) {
        inputsInLines.push([]);
      };
      if (array[x][y] !== ' ') {
        inputsInLines[y].push(array[x][y]);
      };
    };
  };
  return inputsInLines.map(x => x.reverse());
};

const moves = (array) => {
  const manual = [];
  array.map(x => {manual.push([Number(x[1]), Number(x[3]), Number(x[5])])});
  return manual;
};

const initailStackState = columnsToArrays(linesOfInput); //for part1 the colums
const for9001 = columnsToArrays(linesOfInput); //for part2 the colums
const manualForWork = moves(instructions); //moves for both parts

//part1
const workingWith9000 = (stacks, moves) => {
  for (let index = 0; index < moves.length; index++) {
    let from = moves[index][1] - 1;
    let to = moves[index][2] - 1;
    let count = moves[index][0];
    stacks[to].push(...stacks[from].splice(stacks[from].length - count, count).reverse());
  };
  return stacks;
};

console.log('part1: ' + workingWith9000(initailStackState, manualForWork).map(x => x.pop()).join(''));

//part2
const workingWith9001 = (piles, moves) => {
  for (let index = 0; index < moves.length; index++) {
    let from = moves[index][1] - 1;
    let to = moves[index][2] - 1;
    let count = moves[index][0];
    piles[to].push(...piles[from].splice(piles[from].length - count, count));
  };
  return piles;
};

console.log('part1: ' + workingWith9001(for9001, manualForWork).map(x => x.pop()).join(''));
