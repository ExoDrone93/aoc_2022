const { readFileSync } = require('fs');

const readFile = () => {
  const contents = readFileSync('day2/input.txt', 'utf-8');
  const arr = contents.split(/\r?\n/);
  return arr;
};

const original = readFile();

const totalPoints = (array) => {
  let total = 0;
  for (let index = 0; index < array.length; index++) {
    let myHand = array[index].charAt(2)
    let enemyHand = array[index].charAt(0)
    switch (enemyHand) {
      case 'A': //rock 1
        switch (myHand) {
          case 'X': //rock draw
            total += 4
            break;
          case 'Y': //paper win
            total += 8
            break;
          case 'Z': //scissors loss
            total += 3
            break;
          default:
            break;
        }
        break;
      case 'B': //paper 2
        switch (myHand) {
          case 'X': //rock loss
            total += 1
            break;
          case 'Y': //paper draw
            total += 5
            break;
          case 'Z': //scissors win
            total += 9
            break;
          default:
            break;
        }
        break;
      case 'C': //scissors 3
        switch (myHand) {
          case 'X': //rock win
            total += 7
            break;
          case 'Y': //paper loss
            total += 2
            break;
          case 'Z': //scissors draw
            total += 6
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }
  return total
}

console.log(totalPoints(original));

const totalPoints2 = (array) => {
  let total = 0;
  for (let index = 0; index < array.length; index++) {
    let myHand = array[index].charAt(2)
    let enemyHand = array[index].charAt(0)
    switch (enemyHand) {
      case 'A': //rock 1
        switch (myHand) {
          case 'X': //lose scissors
            total += 3
            break;
          case 'Y': //draw rock
            total += 4
            break;
          case 'Z': //win paper
            total += 8
            break;
          default:
            break;
        }
        break;
      case 'B': //paper 2
        switch (myHand) {
          case 'X': //lose rock
            total += 1
            break;
          case 'Y': //draw paper
            total += 5
            break;
          case 'Z': //win scissors
            total += 9
            break;
          default:
            break;
        }
        break;
      case 'C': //scissors 3
        switch (myHand) {
          case 'X': //lose paper
            total += 2
            break;
          case 'Y': //draw scissors
            total += 6
            break;
          case 'Z': //win rock
            total += 7
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }
  return total
}

console.log(totalPoints2(original));
