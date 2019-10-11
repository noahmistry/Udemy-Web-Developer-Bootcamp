$("button").on("click",function() {
    $("div").slideToggle(500,function() {
        $(this).remove();
    }) 
        // $(this).remove();       
});