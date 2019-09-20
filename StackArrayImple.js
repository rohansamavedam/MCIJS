class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value){
    const newNode = new Node(value);
    this.array.push(newNode);
    this.length++;
  }

  pop(){
    return this.array.pop();
    this.length--;
  }

}

const myStack = new Stack();
myStack.push(5);
myStack.push(7);
myStack.push(8);
myStack.push(8);
myStack.push(8);
myStack.push(8);
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);




//Discord
//Udemy
//google
