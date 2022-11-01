// [55, 45, 60, 85, 20, 50]

let mainArray = [505, 45, 60, 85, 20, 50];

let sum = 0;
for (const num of mainArray) {
  sum += num;
}
let avg = sum / mainArray.length;
// console.log(avg);

// reverse the array :
let reverseArray = [];
// for ( i = mainArray.length ; i>=0; i--) _______ tahole eikhane 1st item ta undefined dekhay
for (let i = mainArray.length - 1; i >= 0; i--) {
  //   console.log(mainArray[i]);
  mainArray.push(mainArray[i]);
}
// console.log(mainArray);

// find out the particular number :

const particularNum = mainArray.find((element) => element > 30);
console.log(particularNum);
