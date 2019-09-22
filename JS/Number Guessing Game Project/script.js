var secretNumber  = 21;

var guessedNumber = Number(prompt("What's your guess?"));

if (guessedNumber == secretNumber) {
    alert("You've guessed right! The secret number was " +secretNumber);
}
else if (guessedNumber > secretNumber) {
    alert("Try aiming lower!")
}
else {
    alert("Try again!");
}