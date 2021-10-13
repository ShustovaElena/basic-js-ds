const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


module.exports = class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.rootNode === null) {
        this.rootNode = newNode;
    } else {
        this.addInner(this.rootNode, newNode);
    }
  }

  addInner(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
          node.left = newNode;
      } else {
          this.addInner(node.left, newNode);
      }
  } else {
      if (node.right === null) {
          node.right = newNode;
      } else {
          this.addInner(node.right, newNode);
      }
  }
  }

  has(data) {
    return this.hasInner(this.rootNode, data);
  }

  hasInner(node, data) {
    if (node == null) {
      return false;
    }

    if (node.data == data) {
      return true;
    } else if (data > node.data) {
      return this.hasInner(node.right, data);
    } else {
      return this.hasInner(node.left, data);
  }
}

  find(data) {
    return this.findInner(this.rootNode, data);
  }

  findInner(node, data) {
    if (node == null) {
      return node;
    }

    if (node.data == data) {
      return node;
    } else if (data > node.data) {
      return this.findInner(node.right, data);
    } else {
      return this.findInner(node.left, data);
  }
  }

  remove(data) {
    this.removeInner(this.rootNode, data);
  }

  removeInner(node, data) {
    if (node === null) {
      return null;
  } else if (data < node.data) {
      node.left = this.removeInner(node.left, data);
      return node;
  } else if (data > node.data) {
      node.right = this.removeInner(node.right, data);
      return node;
  } else {
      if (node.left === null && node.right === null) {
          node = null;
          return node;
      }
      if (node.left === null) {
        node = node.right;
          return node;
      } else if(node.right === null) {
        node = node.left;
        return node;
      }

      node.data = this.minInner(node.right);
      node.right = this.removeInner(node.right, node.data);
      return node;
  }
  }

  min() {
    return this.minInner(this.rootNode);
  }

  minInner(node) {
     if (node === null) {
      return null;
     }
    return node.left ? this.minInner(node.left) : node.data;
  }

  max() {
    return this.maxInner(this.rootNode);
  }

  maxInner(node) {
    if (node === null) {
      return null;
    }
    return node.right ? this.maxInner(node.right) : node.data;
  }

}
