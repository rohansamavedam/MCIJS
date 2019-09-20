class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    const node = new Node(value);
    if(this.root === null){
      this.root = node;
      return this;
    }

    let currentNode = this.root;
    let flag = true;
    while(flag){
      if(value < currentNode.value){
        if(currentNode.left === null){
          currentNode.left = node;
          flag = false;
        }else{
          currentNode = currentNode.left;
        }
      }
      else{
        if(currentNode.right === null){
          currentNode.right = node;
          flag = false;
        }else{
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value){
    let currentNode = this.root;
    let flag = true;
    while(currentNode !== null){
      if(currentNode.value === value){
        flag = false;
        return true;
      }

      if(value < currentNode.value){
        currentNode = currentNode.left;
      }else{
        currentNode = currentNode.right;
      }
    }
    return false;
  }
  

  remove(value){
    if(lookup(value) === false){
      console.log("No value Found");
      return 0;
    }

    let currentNode = this.root;
    let parentNode = null;
    let flag = true;

    while(flag){
      if(currentNode.value === value){
        // Is Leaf
        if(currentNode.right === null && currentNode.left === null){
          if(parentNode.left.value === value){
            parentNode.left = null;
          }else{
            parentNode.right = null;
          }
        }
      }

      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      }else{
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
JSON.stringify(traverse(tree.root))
tree.lookup(100);

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}





