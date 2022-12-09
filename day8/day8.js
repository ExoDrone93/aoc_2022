const { readInstructions } = require('../Utils/readFile.js');

const originalInput = readInstructions('day8/input.txt').map(x => x.split('').map(([x]) => Number(x)));

const matrixColumn = (array, n) => array.map(x => x[n]);
const matrixRow = (array, n) => array[n];

let nil = [];
let takeWhile = (f, [x = nil, ...xs]) => (x === nil || !f(x))
    ? [] : [x, ...takeWhile(f, xs)];

const scenicScoreGenerator = (rule, treeThatIsVisible) => {
    const generatedScenicScore = (treeThatIsVisible.length === takeWhile(rule, treeThatIsVisible).length) ?
        takeWhile(rule, treeThatIsVisible).length : takeWhile(rule, treeThatIsVisible).length + 1;
    return generatedScenicScore;
};

const puzzle = (array) => {
    let count = 0;
    const height = array[0].length;
    const width = array.length;
    const circumference = height * 2 + width * 2 - 4;
    const sencicScores = [];
    for (let x = 1; x < width - 1; x++) {
        for (let y = 1; y < height - 1; y++) {
            column = matrixColumn(array, y);
            row = matrixRow(array, x);
            let tree = array[x][y];

            let top = column.slice(0, x);
            let bottom = column.slice(x + 1, column.length);
            let right = row.slice(y + 1, row.length);
            let left = row.slice(0, y);
            if (!top.some(x => x >= tree) || !bottom.some(x => x >= tree)
                || !right.some(x => x >= tree) || !left.some(x => x >= tree)) {
                count++;
            }

            let topScenicScore = scenicScoreGenerator(x => x < tree, top.reverse());
            let bottomScenicScore = scenicScoreGenerator(x => x < tree, bottom);
            let rightScenicScore = scenicScoreGenerator(x => x < tree, right);
            let leftScenicScore = scenicScoreGenerator(x => x < tree, left.reverse());

            let scenicScore = topScenicScore * bottomScenicScore * rightScenicScore * leftScenicScore;
            sencicScores.push(scenicScore);
        }
    }
    return [count + circumference, Math.max(...sencicScores)];
};

console.log(puzzle(originalInput));
