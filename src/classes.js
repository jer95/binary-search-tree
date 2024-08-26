export class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class Tree {
  constructor(arr) {
    this.root = buildTree(arr);
  }
}

export function buildTree(array) {
  let sortedArr = [];
  array
    .sort((a, b) => a - b)
    .forEach((element) => {
      if (!sortedArr.includes(element)) {
        sortedArr.push(element);
      }
    });

  const build = function (arr) {
    if (arr.length === 0) return null;
    const mid = Math.floor(arr.length / 2);
    const node = new Node(arr[mid]);
    node.left = build(arr.slice(0, mid));
    node.right = build(arr.slice(mid + 1));
    return node;
  };
  return build(sortedArr);
}
