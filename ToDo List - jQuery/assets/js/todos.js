// Check off ToDo's //
$("ul").on("click","li",function() {
    $(this).toggleClass("completed");
});

// Click on X to delete ToDo //
$("ul").on("click","span",function(event) {
    $(this).parent().fadeOut("500",function() {
        $(this).remove();
    });
    event.stopPropagation();
});

// Creation of new ToDo's //
$("input[type='text']").on("keypress",function(event) {
    if (event.which === 13) {
        //gets new text from input //
       var todoText = $(this).val();
       $(this).val("");
       //create a new li to the ul list //
       $("ul").append("<li><span><i class='fas fa-minus-circle'></i></span>" + todoText + "</li>")
    }
});