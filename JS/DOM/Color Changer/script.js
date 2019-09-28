// var btn = document.querySelector("button");
// var body = document.querySelector("body");


// if (body === isWhite) {
//     btn.addEventListener("click",function() {
//         body.style.background="black";
//     })
// } else {
//     btn.addEventListener("click",function() {
//         body.style.background="white";
//     })
// }

var btn = document.querySelector("button");
var isWhite = false;
    // LOGIC //
    // if background is white make it black, else make it black
// btn.addEventListener("click",function() {
//     if (isWhite) {
//         document.body.style.background="black";
//     } else {
//         document.body.style.background="white";
//     }
//     //refactored code
//     isWhite = !isWhite;
// })

btn.addEventListener("click",function() {
        document.body.classList.toggle("white");
})