//WHAT I NEED
//Input from the user on how many dice they want to play with
//(up to 6 dice)
//A random number generator to simulate the die rolls
//Switch statement to track scoring rules?

var dice = prompt("How many dice do you want to play with? (up to 6)");

if (dice > 6) {
  alert("I'm sorry, you need to choose no more than 6 die.");
  dice.reload();
}
