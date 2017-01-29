// Magic Eight Ball 

// function popQuestion(){
//     var question = prompt("Type your question for Magic Eight Ball", "Am I ...");
//     if (question != null) {
//         document.getElementById("question-text").innerHTML =
//         "You asked: " + question + "?";
//     }
// }
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
    
    checkQuestionForCustom(myQuestion);

    answers = answers.concat(customAnswers);

    var answer = answers[getRandomAnswerIndex()];

    document.getElementById("answer-p").innerHTML = answer;

    questionAnswerHist.push(myQuestion + "-" + answer);

    document.getElementById("ball-question-input").value = '';
}

function getRandomAnswerIndex(){
    var mergeAnswersArray = answers.concat(customAnswers);
    var arrayMax = mergeAnswersArray.length;
    var randomNum = Math.floor(Math.random() * arrayMax);
    return randomNum;
}

function checkQuestionForCustom(currQuestion) {
    // debugger;
    if (currQuestion.includes("add_answer:")) {
        customAnswers.push(currQuestion.split(":")[1]);
    }
    if (currQuestion.includes("clear_answers")) {
        customAnswers = [];
    }
    if (currQuestion.includes("clear_history")) {
        questionAnswerHist = [];
    }
}