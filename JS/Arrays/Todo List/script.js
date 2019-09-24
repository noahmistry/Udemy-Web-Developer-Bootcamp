window.setTimeout(function() {
    // put all of your JS code from the lecture here
  }, 500);
var list = [];
var input = prompt("What would you like to add to the list?");
while (input != "quit") {
    if (input === "list") {
        listTodos();
        console.log(list);
    } else if (input === "new") {
        addTodo();
    } else if (input === "delete") {
       deleteTodo();
    }
    //ask again for new input
    var input = prompt("What would you like to add to the list?");
    }
    console.log("You have quit the app, Goodbye!");

    function listTodos() {
        list.forEach(function(todoItem, i) {
            console.log("----------------");
            console.log(i + ": " + todoItem);
        })
        console.log("----------------");
    }

    function addTodo() {
        var newTodo = prompt("Enter a new list item");
        list.push(newTodo);
        console.log("Added todo!")
    }

    function deleteTodo() {
         // ask for index of the todo to be deleted
         var indexDelete = prompt("Which index would you like to be deleted?");
         // delete the indexed todo
         // splice
         list.splice(indexDelete,1);
         console.log("Todo successfully deleted!");
    }