// Version 1 //
// var answer = prompt("Are we there yet?");

// while (answer != "yes" && answer != "yeah") {
//     var answer = prompt("Are we there yet?");
// }
// alert("Yay, We made it!");

// Version 2 - Index of //
var answer = prompt("Are we there yet?");

while (answer.indexOf("yes") === -1) {
    var answer = prompt("Are we there yet?");
}
alert("Yay, We made it!");