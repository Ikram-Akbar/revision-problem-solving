let userInput = window.prompt("please input a character");
if (userInput >= 65 && userInput <= 90) {
  console.log("upper case");
} else if (userInput >= 97 && userInput <= 122) {
  console.log("lower case");
} else {
    console.log("use an alphabet");
}
