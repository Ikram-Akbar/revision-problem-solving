// find out the duplicate value from an array :
// numeric :-
let fakeArray = [1, 2, 1, 3, 4, 3, 5];

let myArr = fakeArray.filter((item, index) => {
  return fakeArray.indexOf(item) !== index;
});
console.log(myArr);

// another solution: 
let newArr = [];
fakeArray.filter((item, index) => {
    let itemIndex = fakeArray.indexOf(item);
    if (itemIndex !== index) {
        newArr.push(item)
    }
})
console.log(newArr);

// ======================
// find out the element by using id:-
// show these object which id are 1;

let userData = [
  { id: 1, name: "aa" },
  { id: 2, name: "gg" },
  { id: 1, name: "yy" },
  { id: 3, name: "dd" },
  { id: 1, name: "cc" },
];
// using array method :-
let duplicateUser = [];
let duplicateValue = userData.forEach((val) => {
  if (val.id == 1) {
    duplicateUser.push(duplicateUser);
  }
});
// console.log(duplicateUser);

// using loop :-
for (let i = 0; i < userData.length; i++) {
  if (userData[i].id == 1) {
    duplicateUser.push(userData[i]);
  }
}
// console.log(duplicateUser);