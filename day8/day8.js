const { readInstructions } = require('../Utils/readFile.js');

const originalInput = readInstructions('day8/input.txt').map(x => x.split('').map(([x]) => Number(x)))

const matrixColumn = (array, n) => array.map(x => x[n]);
const matrixRow = (array, n) => array[n];

const part1 = (array) => {
    let count = 0;
    const height = array[0].length
    const width = array.length
    const circumference = height * 2 + width * 2 - 4;
    for (let x = 1; x < width - 1; x++) {
        for (let y = 1; y < height - 1; y++) {
            column = matrixColumn(array, y)
            row = matrixRow(array, x)
            let tree = array[x][y]
            let top = column.slice(0, x);
            let bottom = column.slice(x + 1, column.length);
            let right = row.slice(y + 1, row.length)
            let left = row.slice(0, y)
            if (!top.some(x => x >= tree) || !bottom.some(x => x >= tree)
                || !right.some(x => x >= tree) || !left.some(x => x >= tree)) {
                count++
            }
        }
    }
    return count + circumference
}

console.log(part1(originalInput));

const part2 = (array) => {
    const sencicScores = [];
    const height = array[0].length
    const width = array.length
    for (let x = 1; x < width - 1; x++) {
        for (let y = 1; y < height - 1; y++) {
            column = matrixColumn(array, y)
            row = matrixRow(array, x)
            let tree = array[x][y]
            console.log(tree, x, y);

            let top = column.slice(0, x).find(x => x >= tree);
            let bottom = column.slice(x + 1, column.length).find(x => x >= tree);
            let right = row.slice(y + 1, row.length).find(x => x >= tree)
            let left = row.slice(0, y).find(x => x >= tree)
            console.log(top, bottom, right, left);
            let scenicScore = top * bottom * right * left
            sencicScores.push(scenicScore)
        }
    }
    return Math.max(...sencicScores);
}

console.log(part2(originalInput));
