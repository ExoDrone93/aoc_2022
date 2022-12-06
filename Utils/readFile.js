const { readFileSync } = require('fs');

const readInstructions = (filePath) => {
  const contents = readFileSync(filePath, 'utf-8');
  const arr = contents.split(/\r?\n/);
  return arr;
};

module.exports = { readInstructions };
