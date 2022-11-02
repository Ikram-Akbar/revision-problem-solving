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