const { readInstructions } = require('../Utils/readFile.js');

const original = readInstructions('day7/input.txt').map(x => x.split(' '));

// console.log(original);

class Node {
  size = 0;
  parent = null;
  children = [];
  name = null;
  childSumOfSize = null;
  constructor(size, parent, children, name, childSumOfSize) {
    this.size = size;
    this.parent = parent;
    this.children = children;
    this.name = name;
    this.childSumOfSize = childSumOfSize
  }

  addChild(newChild) {
    this.children.push(newChild);
  }

  setSize(newSize) {
    this.size = newSize;
  }

  setName() {
    this.name = this.getName();
  }

  getName() {
    return (this.parent?.getName() ?? '') + this.name;
  }

  getSize() {
    const newLocal = this.children.reduce((acc, node) => acc += node.getSize(), 0);
    return this.size + newLocal;
  }
}

const createNode = (size, parent, children, name, childSumOfSize) => {
  return new Node(size, parent, children, name, childSumOfSize)
};

const part1 = (array) => {
  const tree = [];
  let currentNode = null;
  array.forEach(([action, command, name]) => {
    if (command == 'cd' && name !== '..') {
      const node = createNode(0, currentNode, [], name, 0);
      currentNode?.children.push(node)
      currentNode = node;
      tree.push(node);
      return;
    }

    if (command === 'cd' && name === '..') {
      currentNode = tree.find(node => node.getName() === currentNode?.parent?.getName());
    }

    if (isNaN(action) === false) {
      currentNode.size += Number(action)
    }
  });
  return tree;
}

const subFinalTree = part1(original);

subFinalTree.forEach(x => {
  x.size = x.getSize();
  x.setName()
});

console.log(subFinalTree.filter(x => x.size <= 100000).map(x => x.size).reduce((a, b) => a + b));
