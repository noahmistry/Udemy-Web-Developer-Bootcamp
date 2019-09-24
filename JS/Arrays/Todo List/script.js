window.setTimeout(function() {
    // put all of your JS code from the lecture here
  }, 500);
var list = [];
var input = prompt("What would you like to add to the list?");
while (input != "quit") {
    if (input === "list") {
        console.log(list);
    } else if (input === "new") {
        var newTodo = prompt("Enter a new list item");
        list.push(newTodo);
    }
    var input = prompt("What would you like to add to the list?");
}
    console.log("You have quit the app, Goodbye!");
