// vars
var highScoreTable = document.querySelector("#highScoreTable");
var goBack = document.querySelector("#goBack");
var clearHighScores = document.querySelector("#clearHighScores");

// scores
scores();
// function scores
function scores() {
    storedScores = JSON.parse(localStorage.getItem("scores"));

    if (storedScores !== null) {
        scoreList = storedScores;
    }
    renderScores()
}


//function to clear all
function clear() {
    window.localStorage.clear();
}

// function render
function renderScores() {
    if (storedScores !== null) {
        scoreList.sort(function (a, b) {
            return a.newScore - b.newScore
        });

        scoreList.reverse(function (a, b){
            return a.newScore - b.newScore
        });

        for (let i = 0; i < scoreList.length; i++) {
            
            var scoreItem = scoreList[i];
            var tableCol = document.createElement("tableCol");
            var tableRow = document.createElement("tableRow");
            var nameText = document.createTextNode(scoreItem.name);
            var scoreText= document.createElement("scoreText");
            var scoreRank = document.createTextNode(scoreItem.newScore);

            tableCol.setAttribute("tableCol",i);
            document.getElementById("highScoresTable").appendChild(tableCol);
            tableCol.appendChild(tableRow);
            tableRow.appendChild(nameText);
            tableCol.appendChild(scoreText);
            scoreText.appendChild(scoreRank);           
            
        }
    }
}
clearHighScores.addEventListener("click", function() {
    clearAll();
    window.location.href = "highScore.html";

})
goBack.addEventListener("click", function () {
    window.location.href = "index.html";
})