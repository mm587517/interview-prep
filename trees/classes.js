"use strict";
exports.__esModule = true;
var TreeNode = /** @class */ (function () {
    // Initialize a new node
    function TreeNode(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    TreeNode.prototype.getData = function () {
        return this.data;
    };
    TreeNode.prototype.setData = function (data) {
        this.data = data;
    };
    TreeNode.prototype.getLeft = function () {
        return this.left;
    };
    TreeNode.prototype.setLeft = function (node) {
        this.left = node;
    };
    TreeNode.prototype.getRight = function () {
        return this.right;
    };
    TreeNode.prototype.setRight = function (v) {
        this.right = v;
    };
    return TreeNode;
}());
exports.TreeNode = TreeNode;
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.getRoot = function () {
        return this.root;
    };
    BinarySearchTree.prototype.setRoot = function (v) {
        this.root = v;
    };
    BinarySearchTree.prototype.inOrder = function (v) {
        if (v === null)
            return;
        this.inOrder(v.getLeft());
        console.log(v.getData());
        this.inOrder(v.getRight());
    };
    BinarySearchTree.prototype.add = function (data) {
        // Create a new node
        var newNode = new TreeNode(data);
        // If tree is empty, set new node as root
        if (this.root == null) {
            this.root = newNode;
            return true;
        }
        else {
            // If tree is not empty, find the right spot for the new node
            var currentNode = this.root;
            var traversing = true;
            while (traversing) {
                if (currentNode.getData() == newNode.getData()) {
                    //Assumption: Duplicates are not accepted.
                    traversing = false;
                    return false;
                }
                else if (newNode.getData() < currentNode.getData()) {
                    // Traverse left of the node
                    if (currentNode.getLeft() == null) {
                        //Add to the left of the current node
                        currentNode.setLeft(newNode);
                        traversing = false;
                        return true;
                    }
                    else {
                        //Traverse the left of the current node
                        currentNode = currentNode.getLeft();
                    }
                }
                else if (newNode.getData() > currentNode.getData()) {
                    // Traverse right of the node
                    if (currentNode.getRight() == null) {
                        //Add to the right of the current node
                        currentNode.setRight(newNode);
                        traversing = false;
                        return true;
                    }
                    else {
                        //Traverse the left of the current node
                        currentNode = currentNode.getRight();
                    }
                }
            }
        }
    };
    return BinarySearchTree;
}());
exports.BinarySearchTree = BinarySearchTree;
