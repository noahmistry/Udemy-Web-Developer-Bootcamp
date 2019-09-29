var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1CurrentScore = document.querySelector("#p1CurrentScore");
var p2CurrentScore = document.getElementById("p2CurrentScore");
var numInput = document.querySelector("input"); 
// document.querySelector("input['number']") if there is more than one input
var totalScore = document.getElementById("totalScore");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var resetButton = document.querySelector("#reset");


p1Button.addEventListener("click",function() {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            p1CurrentScore.style.color = "green";
            gameOver = true;
        }
        p1CurrentScore.textContent = p1Score;
    }  
    
});

p2Button.addEventListener("click",function() {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2CurrentScore.style.color = "green";
            gameOver = true;
        }
        p2CurrentScore.textContent = p2Score;
    }
});

resetButton.addEventListener("click",function() {
    reset();
});

// DRY CODE
function reset() {
    p1Score = 0;
    p2Score = 0;
    p1CurrentScore.textContent = 0;
    p2CurrentScore.textContent = 0;
    p1CurrentScore.style.color = "black";
    p2CurrentScore.style.color = "black";
    gameOver = false;
}

numInput.addEventListener("change",function() {
    totalScore.textContent  = this.value;
    winningScore = Number(this.value);
    reset();
});
