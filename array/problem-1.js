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
console.log(sortedArray);
