class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  getLen(){
    return this.length
  }

  get(index){
    return this.data[index]
  }

  push(item){
    this.data[this.length] = item;
    this.length = this.length + 1;
  }

  pop(){
    const item = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return item;
  }

  delete(index){
    const item = this.data[index]
    this.shiftItems(index)
    return item;
  }

  shiftItems(index){
    for(let i=index; i<this.length-1; i++){
      this.data[i] = this.data[i+1]
    }
    delete this.data[this.length-1]
    this.length--;
  }

  splice(indexOne, indexTwo){
    const diff = indexTwo - indexOne + 1;
    for(let i=indexOne; i<indexTwo; i++){
      this.data[i] = this.data[i + diff];
    }
    for(let j=this.length-1; j>indexTwo-1; j--){
      delete this.data[j]
    }
    this.length = this.length - diff
  }


}

//Test

const arr = new myArray();
arr.push("rohan");
arr.push("one");
arr.push("two")
arr.push("three")
arr.push("four")
console.log(arr.data)
arr.splice(3,4)
console.log(arr.getLen())
console.log(arr.data)