function reverse(str){
  const backwards = []
  for(let i=str.length-1; i>=0; i--){
    backwards.push(str[i])
  }
  return backwards.join('')
}


function reverse1(str){
  var ans = '';
  for(let i=0; i<str.length; i++){
    const ch = str.charAt(i)
    ans = ch + ans
  }
  return ans
}

function reverse2(str){
  return str.split('').reverse().join('')
}

//ES6 with new Features and Arrow Notation

const reverse3 = (str) => str.split('').reverse().join('')

const reverse4 = (str) => [...str].reverse().join('')

//Test

console.log(reverse4('Hi My name is Rohan'))