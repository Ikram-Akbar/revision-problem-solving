const demoArray = [
  { name: "aa", age: 80 },
  { name: "bb", age: 40 },
  { name: "cc", age: 90 },
  { name: "dd", age: 50 },
];
// sort the array with the age :
let sortedAge = demoArray.sort((ele1, ele2) => {
  return ele2.age - ele1.age;
});
let youngest = sortedAge[0];
console.log(youngest);
console.log(sortedAge);
/* result : 
after sort : 
[
  { name: 'cc', age: 90 },
  { name: 'aa', age: 80 },
  { name: 'dd', age: 50 },
  { name: 'bb', age: 40 }
]

the oldest / youngest : 
{ name: 'cc', age: 90 }

*/


// bubble sort : 
for (let i = 0; i < demoArray.length; i++) {
  for (let j = 0; j < demoArray.length - i - 1; j++) {
    if (demoArray[j].age > demoArray[j + 1].age) {
      let temp = demoArray[j].age;
      demoArray[j].age = demoArray[j + 1].age;
      demoArray[j + 1].age = temp;
    }
  }
}

console.log(demoArray);
/* 
result : 
[
  { name: 'aa', age: 40 },
  { name: 'bb', age: 50 },
  { name: 'cc', age: 80 },
  { name: 'dd', age: 90 }
]

*/
