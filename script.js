// Questions for quiz
var questions = [
    {
        question : "What characters are used to store/create an array?",
        choices : ["brackets, curly brackets, parenthses, double quotes"],
        answer : "brackets"
    },
    {
        question : "What characters are used to store/create a string?",
        choices : ["brackets, curly brackets, parenthses, double quotes"],
        answer : "double quotes"
    },
    {
        question : "How do we create random integers?",
        choices : ["Math.floor(Math.random() * #), Math.random(Math.floor() * #), Math.parse(Math.random() * #)"],
        answer : "Math.floor(Math.random() * #)"
    },
    {
        question : "What does i++ mean?",
        choices : ["index = index + 1, index = index + 2, index = number + 1, index"],
        answer : "index = index + 1"
    },
    {
        question : "What does JSON.Parse mean?",
        choices : ["object to string, string to object, object to array, string to array"],
        answer : "string to object"
    },
    
];

// Declared vars
var i = 0;
var score = 0;
var timer = document.querySelector("#time");
var questionsDiv = document.querySelector("#questionsDiv");
var secondsRem = 60;



// Timer Function
function setTime() {
    var timeInterval = setInterval(function () {
        secondsRem--;
        timer.textContent = "Timer" + secondsRem;

        if(secondsRem === 0) {
            clearInterval(timeInterval);
            alert("Sorry, you are out of time!");
            
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


        document.body.children[1].appendChild(scoreEl);
        document.getElementById("h1").setAttribute("id", "score");

        document.getElementById("question").textContent = "Your Score: " + score;
        
        document.body.children[1].appendChild(inputTag);
        document.getElementsByTagName("input").setAttribute("id", "inputBox");

        document.body.children[1].appendChild(submitBtn);
        submitBtn.addEventListener("click", function(event){
            event.preventDefault();

            var scoreText = new Object();
            scoreText.name = inputTag.value.trim();
            scoreText.scoreNew = score;
            
        })



    }