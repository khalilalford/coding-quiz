var timeLeft = 75;
var timerID;
var timerEl = document.getElementById ("timer");
var startButton = document.getElementById ("start-btn");
var nextButton = document.getElementById ("next-btn");
var questionContainerEl = document.getElementById ("question-container");
var startContainerEl = document.getElementById("start-container");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");
var checkAnswerEl = document.getElementById("check-answer");
var viewHighScores =document.getElementById("highscores-link")
var submitButton = document.getElementById("submit-btn");
var clearScoreButton = document.getElementById("clear-btn");
var initialsField = document.getElementById("player-name");
var restartButton = document.getElementById("restart-btn");
var scoreField = document.getElementById("player-score")
var scores = JSON.parse(localStorage.getItem("scores")) || [];


var shuffledQuestions, currentQuestionIndex;


startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
});


function timeTick() {
    timeLeft--;
    timerEl.textContent="Time: " + timeLeft;
    if (timeLeft <=0){
        saveScore();
    }
}