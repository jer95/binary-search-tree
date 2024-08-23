function insert(value, tree) {
  if (tree.root === null) {
    return new Node(value);
  }
  let current = tree.root;
  let parent = null;

  while (current !== null) {
    parent = current;
    if (current.data >= value) {
      current = current.left;
    } else {
      current = current.right;
    }
  }

  if (parent.data >= value) {
    parent.left = new Node(value);
  } else {
    parent.right = new Node(value);
  }

  return tree;
}

function deleteItem(value, tree) {
  let current = tree.root;
  let parent = null;
  while (current !== null || current.data !== value) {
    parent = current;
    if (current.data > value) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  // remove leaf node
  if (current === null) return;
  if (current.left == null && current.right == null) {
    if (current === tree.root) {
      tree.root = null;
    } else if (parent.left == current) {
      parent.left = null;
    } else if (parent.right == current) {
      parent.right = null;
    }
  }
  // remove node w/ 1 child

  //right node
  if (current.left !== null || current.right == null) {
    if (current.left !== null) {
      if (parent.left === current) {
        parent.left = current.left;
      } else {
        parent.right = current.left;
      }
    }
    // left node
    if (current.left == null || current.right !== null)
      if (current.right !== null) {
        if (parent.left === current) {
          parent.left = current.right;
        } else {
          parent.right = current.right;
        }
      }
  }
}

function find(value, tree) {
  let current = tree.root;
  while (current !== null) {
    if (current.data == value) {
      return current;
    }
    if (current.data > value) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return current;
}

function levelOrder(callback, tree) {
  if (callback === undefined) {
    throw Error("Pleas provide a callback");
  }
  if (!tree) return;

  let root = tree.root;
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    callback(node);
    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
}

function recursiveLevelOrder(tree, callback) {
  if (callback === undefined) {
    throw Error("Pleas provide a callback");
  }
  if (!tree) return null;

  function recursion(queue) {
    if (queue.length === 0) {
      return;
    } else {
      const node = queue.shift();
      callback(node);
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
      recursion(queue);
    }
  }

  const defaultQueue = [];
  if (tree) defaultQueue.push(tree.root);
  recursion(defaultQueue);
}

function callback(node) {
  console.log(node);
}

function recursiveInOrder(callback, tree) {
  if (callback === undefined) {
    throw Error("Pleas provide a callback");
  }
  if (!tree) return null;

  function recursion(node) {
    if (node === null) {
      return;
    } else {
      recursion(node.left);
      callback(node);
      recursion(node.right);
    }
  }
  let root = tree.root;
  recursion(root);
}

function recursivePreOrder(callback, tree) {
  if (callback === undefined) {
    throw Error("Pleas provide a callback");
  }
  if (!tree) return null;

  function recursion(node) {
    if (node === null) {
      return;
    } else {
      callback(node);
      recursion(node.left);
      recursion(node.right);
    }
  }
  const root = tree.root;
  recursion(root);
}

function recursivePostOrder(callback, tree) {
  if (callback === undefined) {
    throw Error("Pleas provide a callback");
  }
  if (!tree) return null;

  function recursion(node) {
    if (node === null) {
      return;
    } else {
      recursion(node.left);
      recursion(node.right);
      callback(node);
    }
  }
  const root = tree.root;
  recursion(root);
}
