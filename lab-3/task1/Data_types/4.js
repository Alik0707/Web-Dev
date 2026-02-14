function camelize(str) {
    return str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
  }

// 2
function filterRange(arr1, a, b) {
    // added brackets around the expression for better readability
    return arr1.filter(item => (a <= item && item <= b));
  }
  
  let arr1 = [5, 3, 8, 1];
  
  let filtered = filterRange(arr1, 1, 4);
  
  alert( filtered ); // 3,1 (matching values)
  
  alert( arr1 ); // 5,3,8,1 (not modified)
// 3
function filterRangeInPlace(arr1, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      // remove if outside of the interval
      if (val < a || val > b) {
        arr1.splice(i, 1);
        i--;
      }
    }
  
  }
  
let arr2 = [5, 3, 8, 1];
  
  filterRangeInPlace(arr2, 1, 4); // removed the numbers except from 1 to 4
  
  alert( arr ); // [3, 1]
  // 4
let arr3 = [5, 2, 1, -10, 8];

arr3.sort((a, b) => b - a);

alert( arr3 );
// 5
function copySorted(arr4) {
    return arr4.slice().sort();
  }
  
  let arr4 = ["HTML", "JavaScript", "CSS"];
  
  let sorted = copySorted(arr4);
  
  alert( sorted );
  alert( arr4 );

// 6
function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }

  // 7
let John = { name: "John", age: 25 };
let Pete = { name: "Pete", age: 30 };
let Mary = { name: "Mary", age: 28 };

let users1 = [ John, Pete, Mary ];

let names = users1.map(item => item.name);

alert( names ); // John, Pete, Mary

// 8
let joHn = { name: "John", surname: "Smith", id: 1 };
let peTe = { name: "Pete", surname: "Hunt", id: 2 };
let maRy = { name: "Mary", surname: "Key", id: 3 };

let users = [ joHn, peTe, maRy ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // John Smith

// 9
function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
  }
  
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };
  
  let arr = [ pete, john, mary ];
  
  sortByAge(arr);
  
  // now sorted is: [john, mary, pete]
  alert(arr[0].name); // John
  alert(arr[1].name); // Mary
  alert(arr[2].name); // Pete

// 10
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  let arr5 = [1, 2, 3];
  shuffle(arr5);
  alert(arr5);

  // 11
  function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
  let jOhn = { name: "John", age: 25 };
  let pEte = { name: "Pete", age: 30 };
  let mAry = { name: "Mary", age: 29 };
  
  let ar = [ john, pete, mary ];
  
  alert( getAverageAge(arr5) ); // 28

  // 12
  function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(strings) ); // Hare, Krishna, :-O
  // 13
  function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }
