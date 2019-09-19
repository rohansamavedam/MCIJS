
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  };
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const temp = new Node(value);
    this.tail.next = temp;
    temp.prev = this.tail;
    this.tail = temp;
    this.length++;
  }

  prepend(value) {
    const temp = new Node(value);
    temp.next = this.head;
    this.head.prev = temp;
    this.head = temp;
    this.length++;
  }

  getLength() {
    console.log(this.length);
  }

  printList(){
    const arr = [];
    let currentNode = this.head;
    while(currentNode !== null){
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr);
  }

  insert(index, value){
    let temp = new Node(value);
    let currentNode = this.head;
    for(let i = 0; i < index; i++){
      currentNode = currentNode.next;
    }
    const tempNode = currentNode.next;
    currentNode.next = temp;
    temp.prev = currentNode;
    temp.next = tempNode;
    tempNode.prev = temp;
  }

  remove(index){
    let currentNode = this.head;
    for(let i = 0; i < index-1; i++){
      currentNode = currentNode.next;
    }
    const tempNode = currentNode.next.next;
    currentNode.next = tempNode;
    tempNode.prev = currentNode;
  }

  printReverse(){
    const arr = [];
    let currentNode = this.tail;
     while(currentNode !== null){
      arr.push(currentNode.value);
      currentNode = currentNode.prev;
    }
    console.log(arr);
  }
}

let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(12);
myLinkedList.append(16);
myLinkedList.append(1);
myLinkedList.prepend(9);
myLinkedList.insert(1, 11);
myLinkedList.remove(2);
myLinkedList.printList();
myLinkedList.printReverse();



