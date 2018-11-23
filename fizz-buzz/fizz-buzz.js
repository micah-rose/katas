//WHAT I'LL NEED
//Variable for the array of numbers
//A loop to fill the array (and print it)
//Switch statement to determine what to print

var totalNums = 100;
var nums = [];

for (i = 1; i <= totalNums; i++) {
  nums[i] = i;
  if (i % 15 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0 || i.toString().indexOf("3") > -1) {
    console.log("Fizz");
  } else if (i % 5 == 0 || i.toString().indexOf("5") > -1) {
    console.log("Buzz");
  } else console.log(i);
}
