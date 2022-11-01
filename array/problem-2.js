// // [55, 45, 60, 85, 20, 50]

let mainArray = [55, 45, 60, 85, 20, 50];

let sum = 0;
for (const num of mainArray) {
  sum += num;
}
let avg = sum / mainArray.length;
console.log(avg);
