export class TreeNode {
  private data: number;
  public getData(): number {
    return this.data;
  }
  public setData(data: number) {
    this.data = data;
  }

  private left: TreeNode;
  public getLeft(): TreeNode {
    return this.left;
  }
  public setLeft(node: TreeNode) {
    this.left = node;
  }

  private right: TreeNode;
  public getRight(): TreeNode {
    return this.right;
  }
  public setRight(v: TreeNode) {
    this.right = v;
  }

  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  private root: TreeNode;
  public getRoot(): TreeNode {
    return this.root;
  }
  public setRoot(v: TreeNode) {
    this.root = v;
  }

  constructor() {
    this.root = null;
  }

  inOrder(v: TreeNode): void {
    if (v === null) return;

    this.inOrder(v.getLeft());
    console.log(v.getData());
    this.inOrder(v.getRight());
  }

  add(data: number): boolean {
    const newNode = new TreeNode(data);

    if (this.root == null) {
      this.root = newNode;
      return true;
    } else {
      let currentNode = this.root;
      let traversing = true;
      while (traversing) {
        if (currentNode.getData() == newNode.getData()) {
          traversing = false;
          return false;
        } else if (newNode.getData() < currentNode.getData()) {
          if (currentNode.getLeft() == null) {
            currentNode.setLeft(newNode);
            traversing = false;
            return true;
          } else {
            currentNode = currentNode.getLeft();
          }
        } else if (newNode.getData() > currentNode.getData()) {
          if (currentNode.getRight() == null) {
            currentNode.setRight(newNode);
            traversing = false;
            return true;
          } else {
            currentNode = currentNode.getRight();
          }
        }
      }
    }
  }
}
