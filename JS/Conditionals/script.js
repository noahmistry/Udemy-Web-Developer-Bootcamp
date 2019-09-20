var currentAge = prompt("Please input your current age");
// If age is negative
if (currentAge < 0) {
    alert("You can't be a negative age!"); 
}
// If age is equal to 21
if (currentAge === 21) {
    alert("It's your 21st birthday!")
}
// If age is odd
if (currentAge % 2 !== 0) {
    alert("Your age is odd!");
}
// If age is a perfect square
if (currentAge % Math.sqrt(currentAge) === 0) {
    alert("Your age is a perfect square!");
}