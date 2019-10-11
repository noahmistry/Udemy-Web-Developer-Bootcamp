// var to generate random array of colors //
var numSquares = 6;
var colors = [];
var pickedColor;

var mainHeading = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetBtn = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

// Initial the page with news colors, all buttons and pickedColor background //
init();

function init() {
    // mode buttons and event listeners //
    // use mode button function to summon listeners //
    setupModeButtons();
    // use squares listeners function to setup and color all squares //
    setupSquareListeners();
    reset();
}

// function to load the mode buttons listeners //
function setupModeButtons() {
    for (var i = 0; i < modeBtn.length; i++) {
        modeBtn[i].addEventListener("click",function() {
            modeBtn[0].classList.remove("selectedBtn");
            modeBtn[1].classList.remove("selectedBtn");
            this.classList.add("selectedBtn");
            // Using Ternary Operator //
            this.textContent === "Easy" ? numSquares=3 : numSquares = 6;
           reset();
        });
    }
}

// function to load the squares and listeners //
function setupSquareListeners() {
    // Add event Listeners //
    for (var i = 0; i < squares.length; i++) {
        // LOGIC: Click Events on square will compare it to the pickedColor and if wrong it will change to the body background color, if it is correct it will output a message //
        // add click event listeners to squares
            squares[i].addEventListener("click",function() {
        // grab color of clicked square
            var clickedColor = this.style.backgroundColor;
        //compare color to picked color
                if (clickedColor === pickedColor) {
                    //change messageDisplay to correct
                    messageDisplay.textContent = "Correct!";
                    resetBtn.textContent = "Play Again?";
                    changeColors(clickedColor);
                    mainHeading.style.background = pickedColor;
                } else {
                    this.style.backgroundColor = "#232323";
                    messageDisplay.textContent = "Try Again!";
                }
            });
        }
}

function reset() {
    //generate all new colors //
    colors = generateRandomColors(numSquares);
    // pick a new random color from array //
    pickedColor= pickColors();
    // change colorDisplay to match picked color //
    colorDisplay.textContent = pickedColor;
    resetBtn.textContent = "New Colors"
    //change the colors of squares //
    messageDisplay.textContent = "";
    for(var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColors = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        squares[i].style.backgroundColor = colors[i];
    }
    mainHeading.style.backgroundColor = "steelblue";
}


resetBtn.addEventListener("click", function() {
    reset();
})

// create a function to change all the squares to the picked color //
function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
    //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

//create a function to randomize next set of colors //
function pickColors() {
    // pick random number from colors array //
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// function to generate random colors from variable colors //
function generateRandomColors(num) {
    // make an array //
    var arr = [];
    // repeat num times //
    for(var i = 0; i < num; i++) {
        // get random color and push into array //
        arr.push(randomColor());
    }
    // return that array //
    return arr;
}
        // function for randomColors //
function randomColor() {
    // pick a "red" from 0-255
     var red = Math.floor(Math.random() * 256);
    // pick a "green" from 0-255
    var green = Math.floor(Math.random() * 256);
    // pick a "blue" from 0-255
    var blue = Math.floor(Math.random() * 256);
    // create a concatenated string to reflect "rgb(r, g, b)"
    return "rgb(" + red + "," + " " + green + "," + " " + blue + ")";
    }
    
   







