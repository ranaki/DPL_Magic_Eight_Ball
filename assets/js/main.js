// Magic Eight Ball 

var questionAnswerHist = [];

var answers = ["Yup",
               "Maybe",
               "No way",
               "Could be",
               "Never",
               "Absolutely",
               "Ha"];

var customAnswers = [];

function getQuestion() {
    var myQuestion = document.getElementById("ball-question-input").value;
    
    if (myQuestion.trim() === '') 
    {
        alert("Please enter a Question...");
        return;
    }

    if (!checkQuestionForCustom(myQuestion)) 
    { 
        // debugger;
        document.getElementById("ball-question-input").value = '';
        return;
    };
    // debugger;
    var answersConcat = answers.concat(customAnswers);
    var answer = answersConcat[getRandomAnswerIndex()];

    document.getElementById("answer-p").innerHTML = answer;
    questionAnswerHist.push(myQuestion + "-" + answer);
    addToHistory();
    document.getElementById("ball-question-input").value = '';
}

function getRandomAnswerIndex(){
    // debugger;
    var mergeAnswersArray = answers.concat(customAnswers);
    var arrayMax = mergeAnswersArray.length;
    var randomNum = Math.floor(Math.random() * arrayMax);
    return randomNum;
}

function checkQuestionForCustom(currQuestion) {
    var newAnswer = '';
    if (currQuestion.includes("add_answer:")) {
        newAnswer = currQuestion.split(":")[1];
        if (!customAnswers.includes(newAnswer))
        {
            customAnswers.push(newAnswer);
        }
        return false;
    }
    if (currQuestion.includes("clear_answers")) {
        customAnswers = [];
        return false;
    }
    if (currQuestion.includes("clear_history")) {
        // debugger;
        questionAnswerHist = [];
        addToHistory();
        return false;
    }
    return true;
}
function addToHistory(){
    //for each item in history array make list
    var histList = document.getElementById("history-ul");
    histList.innerHTML = '';
    var li;
    questionAnswerHist.forEach(function (element) {
        li = document.createElement("li");
        li.innerHTML = element;
        histList.appendChild(li);
    })

}