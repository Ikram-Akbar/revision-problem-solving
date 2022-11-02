// insert an element in the array fixed index
const data = ["A", "B", "D", "E", "F"];
const position = 2;
let newValue = "C";
for (let i = data.length - 1; i >= 0; i--) {
  if (i >= position) {
    data[i + 1] = data[i];
    if (i === position) {
      data[i] = newValue;
    }
  }
}

// console.log(data);

//  using array splice :
let userData = ["A", "B", "D", "E"];

let newData = userData.splice(2, 0, "C");
console.log(userData);