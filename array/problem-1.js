// [55, 45, 60, 85, 20, 50]

let demoArray = [55, 45, 60, 85, 20, 50];

// Array Sort
let sortedArray = demoArray.sort((ele1, ele2) => {
  // ascending sort
  return ele1 - ele2;
  /*
     // descending sort
     return ele2 - ele1 
    */
});
// console.log(sortedArray);



// sum of the array - using traditional array
let sumOfTheArray = 0;

for (let i = 0; i < demoArray.length; i++) {
    sumOfTheArray += demoArray[i];
}
console.log(sumOfTheArray);
// using for .. of

let sum = 0;
for (const number of demoArray) {
    sum += number;
}
console.log(sum);

// using Array Method ForEach ()

let result = 0;
demoArray.forEach((num) => {
    result += num;
})
console.log(result);