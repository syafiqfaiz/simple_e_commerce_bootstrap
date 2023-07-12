// class Animal {
//   berbunyi(){
//     console.log('berbunyi')
//   }
// }

// class Cat extends Animal {
//   berbunyi(){
//     super.berbunyi()
//     console.log('meow')
//   }
// }


// const kucing = new Cat()
// kucing.berbunyi()

// nameValue('abu') ===> 24
// a =1
// b =2
// u =21

var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
// kita ada split string to array
// for each char kita cari index dia
// kita totalkan index index dia

function nameValue(myName) {
  var total = 0
  var myNameArr = myName.split(''); // ['a', 'a', 'b', 'u']
  for (var i = 0; i < myNameArr.length; i++) {
    var index = alphabet.indexOf(myNameArr[i]) + 1
    console.log(myNameArr[i])
    console.log(index)
    total += index
    console.log(total)
  }
  return total  
}

console.log(nameValue('aabu'))
