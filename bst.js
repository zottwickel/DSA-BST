/*
1.
   3
  / \
 1   4
  \   \
   2   6
      / \
     5   9
        /
       7

    E
   / \
  A   S
     /  \
    Q    Y
   /     /
  E     U
   \   /
    I T
     \ \
      O S
     /
    N

2.
   2
  / \
 1   4
      \
       6
      / \
     5   9
        /
       7

    A
     \
      S
     /  \
    Q    Y
   /     /
  E     U
   \   /
    I S
     \ \
      O T
     /
    N
*/

class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
      this.key = key;
      this.value = value;
      this.parent = parent;
      this.left = null;
      this.right = null;
  }
  insert(key, value) {
    if (this.key == null) {
        this.key = key;
        this.value = value;
    }
    else if (key < this.key) {
        if (this.left == null) {
            this.left = new BinarySearchTree(key, value, this);
        }
        else {
            this.left.insert(key, value);
        }
    }
    else {
        if (this.right == null) {
            this.right = new BinarySearchTree(key, value, this);
        }
        else {
            this.right.insert(key, value);
        }
    }
  }
  find(key) {
    if (this.key == key) {
        return this.value;
    }
    else if (key < this.key && this.left) {
        return this.left.find(key);
    }
    else if (key > this.key && this.right) {
        return this.right.find(key);
    }
    else {
        throw new Error('Key Error');
    }
  }
}

//3.
const BST1 = new BinarySearchTree()

BST1.insert(3)
BST1.insert(1)
BST1.insert(4)
BST1.insert(6)
BST1.insert(9)
BST1.insert(2)
BST1.insert(5)
BST1.insert(7)
//Works

//4.
const BST2 = new BinarySearchTree()

BST2.insert('E')
BST2.insert('A')
BST2.insert('S')
BST2.insert('Y')
BST2.insert('Q')
BST2.insert('U')
BST2.insert('E')
BST2.insert('S')
BST2.insert('T')
BST2.insert('I')
BST2.insert('O')
BST2.insert('N')
//Works

/*
5.
function tree(t) {
  if(!t) {
    return 0
  }
  return tree(t.left) + t.value + tree(t.right)
}

This algorithm returns NaN. At first it appears to flatten a tree by adding all it's values.
*/

/*
  6. function that traverses the tree on the right and the left that adds 1 to left depth or right depth counter and returns the larger one.
*/

/*
  7. Traverse in reverse, then backtrack by 3.
*/

/*
  8. Check the depth of left and right nodes from the root. if they are equal - tree is balanced.
*/

/*
  9. This algorithm will recur as if each element is being added and if the recursions are equal, it's true.
*/