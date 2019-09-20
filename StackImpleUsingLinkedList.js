class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value){
    const newNode = new Node(value);
    if(this.length == 0){
      this.top = newNode;
      this.bottom = newNode;
    }else{
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
  }

  pop(){
    const pointer = this.top;
    this.top = this.top.next;
    this.length--;
    return pointer;
  }

  printAsArray(){
    let arr = [];
    let currentNode = this.top;
    while(currentNode !== null){
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr);
  }
  //isEmpty
}

const myStack = new Stack();
myStack.push(5);
myStack.push(7);
myStack.push(8);
myStack.push(8);
myStack.push(8);myStack.push(8);
myStack.pop();
myStack.pop();
myStack.printAsArray();




//Discord
//Udemy
//google
