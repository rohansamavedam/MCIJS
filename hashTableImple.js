class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  set(key, value){
    const address = this._hash(key);
    if(!this.data[address]){
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }

  get(key){
    const address = this._hash(key);
    if(!this.data[address]){
      return console.log('Error: Key not Found')
    }

    if(this.data[address].length > 1){
      for(let i = 0; i < this.data[address].length; i++){
        if(this.data[address][i][0] === key){
          console.log(this.data[address][i][1])
        }
      }
    }else{
      console.log(this.data[address][1])
    }
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.set('lemons', 10);
myHashTable.set('cherrys', 50);
myHashTable.get('grapes')
myHashTable.get('cherrys')
myHashTable.get('lemons')
