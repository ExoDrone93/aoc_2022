const { readInstructions } = require('../Utils/readFile.js');

const original = readInstructions('day7/input.txt').map(x => x.split(' '));

class Node {
  size = 0;
  parent = null;
  children = [];
  name = null;
  constructor(size, parent, children, name) {
    this.name = name;
    this.parent = parent;
    this.size = size;
    this.children = children;
  }

  addChild(newChild) {
    this.children.push(newChild);
  }

  getSize() { //read value
    return this.size;
  }

  setSize(size) { //set value or etc.
    this.size = size;
  }

  getFullName() { //setted in the constructor
    return (this.parent?.getFullName() ?? '') + this.name;
  }

  recalculateName() {
    this.name = this.getFullName();
  }

  recalculateSize() {
    this.size = this.getSubFolderSize();
  }

  getSubFolderSize() {
    return this.size + this.children.reduce((acc, node) => acc += node.getSubFolderSize(), 0);
  }
};

const createNode = (size, parent, children, name) => {
  return new Node(size, parent, children, name)
};

const buildTree = (array) => {
  const tree = [];
  let currentNode = null;
  array.forEach(([action, command, name]) => {
    if (command == 'cd' && name !== '..') {
      const node = createNode(0, currentNode, [], name);
      currentNode?.addChild(node);
      currentNode = node;
      tree.push(node);
      return;
    }

    if (command === 'cd' && name === '..') {
      currentNode = tree.find(node => node.getFullName() === currentNode?.parent?.getFullName());
      return;
    }

    if (isNaN(action) === false) {
      currentNode.setSize(currentNode.getSize() + Number(action));
    }

  });
  return tree;
}

const finalTree = buildTree(original).map(node => {
  node.recalculateName();
  node.recalculateSize();
  return node;
});

const part1 = finalTree.filter(node => node.getSize() <= 100000).map(node => node.getSize()).reduce((a, b) => a + b);

const part2 = finalTree
  .filter(node => node.getSize() >= (30000000 - (70000000 - finalTree.find(node => node.getFullName() === '/').getSize())))
  .map(node => node.getSize())
  .sort((a, b) => a - b)[0];

console.log('part1: ' + part1);
console.log('part2: ' + part2);
