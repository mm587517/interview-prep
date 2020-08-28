import { TreeNode, BinarySearchTree } from './classes';
/**
 * Implement a function to check if a binary tree is balanced.
 * For the purposes of this question, a balanced tree is defined to be
 * a tree such that the heights of the two subtrees of any node never differ
 * by more than one
 */

class BST extends BinarySearchTree {
  height(node: TreeNode): number {
    if (node === null) return 0;
    else {
      let left = this.height(node.getLeft());
      let right = this.height(node.getRight());
      if (left > right) return left + 1;
      else return right + 1;
    }
  }

  isBalanced(node: TreeNode): boolean {
    if (node === null) return true;
    else {
      let diff = this.height(node.getLeft()) - this.height(node.getRight());
      if (diff > 1 || diff < -1) return false;
      return true;
    }
  }
}

const tree = new BST();

tree.add(5);
tree.add(6);
tree.add(4);
tree.add(3);

tree.inOrder(tree.getRoot());

const balance = tree.isBalanced(tree.getRoot());
if (balance) console.log('balanced');
else console.log('not balanced');

console.log('Height: ' + tree.height(tree.getRoot()));
