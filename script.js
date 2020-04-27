// Questions for quiz
var questions = [
    {
        question : "What characters are used to store/create an array?",
        choices : ["brackets", "curly brackets", "parenthses", "double quotes"],
        answer : "brackets"
    },
    {
        question : "What characters are used to store/create a string?",
        choices : ["brackets", "curly brackets", "parenthses", "double quotes"],
        answer : "double quotes"
    },
    {
        question : "How do we create random integers?",
        choices : ["Math.floor(Math.random() * #)", "Math.random(Math.floor() * #)", "Math.random.Math.random (* #)", "Math.parse(Math.random() * #)"],
        answer : "Math.floor(Math.random() * #)"
    },
    {
        question : "What does i++ mean?",
        choices : ["index = index + 1", "index = index + 2", "index = number + 1", "index"],
        answer : "index = index + 1"
    },
    {
        question : "What does JSON.Parse mean?",
        choices : ["object to string", "string to object", "object to array", "string to array"],
        answer : "string to object"
    },
    
];

// Declared vars
var i = 0;
var score = 0;
var timer = document.querySelector("#time");
var questionsDiv = document.querySelector("#frontPage");
var secondsRem = 60;
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answerFour = document.getElementById("answerFour");
var highScoreList = [];


// Timer Function
function setTime() {
    var timeInterval = setInterval(function () {
        secondsRem--;
        timer.textContent = "Time: " + secondsRem;

        if(secondsRem === 0) {
            clearInterval(timeInterval);
            alert("Sorry, you are out of time!");
            endOFGame();
            
        }

        else if(i === questions.length) {
            clearInterval(timeInterval);
        }
    }, 1000) 
    return (score)

    
    }

    function endOFGame() {
        
        var scoreEl = document.createElement("h1");
        var inputTag = document.createElement("input");
        var submitBtn = document.createElement("button");
        
        answerOne.remove()
        answerTwo.remove()
        answerThree.remove()
        answerFour.remove()

        
        document.body.children[1].appendChild(scoreEl);
        document.getElementsByTagName("h1")[0].setAttribute("id", "score");

        document.getElementById("question").textContent = "Your Score: " + score;
        
        document.body.children[1].appendChild(inputTag);
        document.getElementsByTagName("input")[0].setAttribute("id", "inputBox");

        document.body.children[1].appendChild(submitBtn);
        submitBtn.addEventListener("click", function(event){
            event.preventDefault();
            var scoreText = new Object();
            scoreText.name = inputTag.value.trim();
            scoreText.scoreNew = score;
            storeHighScore(scoreText);
            window.location.href = "highscore.html";
            
        });
    }

   function quizQuestions() {

    answerOne.hidden = false;
    answerTwo.hidden = false;
    answerThree.hidden = false;
    answerFour.hidden = false;
    
    document.getElementById("startQuiz").hidden = true;
        if (i === questions.length) {
            endOFGame();
        }

        else {
            document.getElementById("question").textContent = questions[i]["question"];        
            document.getElementById("answerOne").textContent = questions[i]["choices"][0];        
            document.getElementById("answerTwo").textContent = questions[i]["choices"][1];        
            document.getElementById("answerThree").textContent = questions[i]["choices"][2];        
            document.getElementById("answerFour").textContent = questions[i]["choices"][3];
        }
    
   }

   function storeHighScore(scoreText) {

    var highScores = JSON.parse(localStorage.getItem("scores"));
    if (highScores === null) {
        highScoreList.push(scoreText);
        localStorage.setItem("scores", JSON.stringify(highScoreList));

    }

    else {
        highScores.push(scoreText);
        localStorage.setItem("scores", JSON.stringify(highScores));
    }
}


    document.getElementById("startQuiz").addEventListener("click", quizQuestions);
    document.getElementById("startQuiz").addEventListener("click", setTime);
    document.getElementById("startQuiz").addEventListener("click", function () {
        questionsDiv.textContent = "";
    });
 
answerOne.hidden = true;
answerTwo.hidden = true;
answerThree.hidden = true;
answerFour.hidden = true;

// Questions and Answers
   document.getElementById("answerOne").addEventListener("click", function () {
       if (question[i]["choices"][0] === question[i]["answer"]) {
           questionsDiv.textContent = "You are correct. Great Job!";
           score++;
       }
       else {
           questionsDiv.textContent = "You are wrong. Try harder!";
           secondsRem -= 10;
       }
       i++;
       quizQuestions();
   })

   document.getElementById("answerTwo").addEventListener("click", function () {
    if (question[i]["choices"][1] === question[i]["answer"]) {
        questionsDiv.textContent = "You are correct. Great Job!";
        score++;
    }
    else {
        questionsDiv.textContent = "You are wrong. Try harder!";
        secondsRem -= 10;
    }
    i++;
    quizQuestions();
})

document.getElementById("answerThree").addEventListener("click", function () {
    if (question[i]["choices"][3] === question[i]["answer"]) {
        questionsDiv.textContent = "You are correct. Great Job!";
        score++;
    }
    else {
        questionsDiv.textContent = "You are wrong. Try harder!";
        secondsRem -= 10;
    }
    i++;
    quizQuestions();
})


document.getElementById("answerFour").addEventListener("click", function () {
    if (question[i]["choices"][3] === question[i]["answer"]) {
        questionsDiv.textContent = "You are correct. Great Job!";
        score++;
    }
    else {
        questionsDiv.textContent = "You are wrong. Try harder!";
        secondsRem -= 10;
    }
    i++;
    quizQuestions();
})

