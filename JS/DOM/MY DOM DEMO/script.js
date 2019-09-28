// var h1 = document.querySelector("h1");
// h1.addEventListener("click",function() {
//    alert("h1 was clicked!"); 
//    h1.style.background = "blue";
// });

// document.querySelector("ul").addEventListener("click", function() {
//     console.log("YOU CLICK THE UL!");
// })

var lis = document.querySelectorAll("li");
for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click",function() {
        // this element will refer to whatever lis[i] was clicked //
        this.style.color = "red";
    });
}