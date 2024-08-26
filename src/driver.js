import { Tree } from "./classes.js";
import {
  recursiveInOrder,
  recursiveLevelOrder,
  recursivePreOrder,
  recursivePostOrder,
  isBalanced,
  reBalance,
  insert,
  prettyPrint,
} from "./utils.js";

let test = new Tree([5, 2, 4, 3, 1, 0]);
isBalanced(test); // true
recursiveLevelOrder(prettyPrint, test);
recursivePreOrder(prettyPrint, test);
recursivePostOrder(prettyPrint, test);
recursiveInOrder(prettyPrint, test);
insert(100, test);
insert(101, test);
insert(102, test);
isBalanced(test); // false
reBalance(test); // reBalances & updates test
isBalanced(test); // true
recursiveLevelOrder(prettyPrint, test);
recursivePreOrder(prettyPrint, test);
recursivePostOrder(prettyPrint, test);
recursiveInOrder(prettyPrint, test);
