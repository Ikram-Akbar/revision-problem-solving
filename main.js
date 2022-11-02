console.log("Hello from Main Js");
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
console.log(duplicateUser);


// using loop :-
for (let i = 0; i < userData.length; i++){
    if (userData[i].id == 1) {
        duplicateUser.push(userData[i])
    }
}
console.log(duplicateUser);