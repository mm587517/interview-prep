"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var classes_1 = require("./classes");
/**
 * Implement a function to check if a binary tree is balanced.
 * For the purposes of this question, a balanced tree is defined to be
 * a tree such that the heights of the two subtrees of any node never differ
 * by more than one
 */
var BST = /** @class */ (function (_super) {
    __extends(BST, _super);
    function BST() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BST.prototype.height = function (node) {
        if (node === null)
            return 0;
        else {
            var left = this.height(node.getLeft());
            var right = this.height(node.getRight());
            if (left > right)
                return left + 1;
            else
                return right + 1;
        }
    };
    BST.prototype.isBalanced = function (node) {
        if (node === null)
            return true;
        else {
            var diff = this.height(node.getLeft()) - this.height(node.getRight());
            if (diff > 1 || diff < -1)
                return false;
            return true;
        }
    };
    return BST;
}(classes_1.BinarySearchTree));
var tree = new BST();
tree.add(5);
tree.add(6);
tree.add(4);
tree.add(3);
tree.add(2);
tree.inOrder(tree.getRoot());
var balance = tree.isBalanced(tree.getRoot());
if (balance)
    console.log('balanced');
else
    console.log('not balanced');
console.log('Height: ' + tree.height(tree.getRoot()));
