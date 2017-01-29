// Magic Eight Ball 

function popQuestion(){
    var question = prompt("Type your question for Magic Eight Ball", "Am I ...");
    if (question != null) {
        document.getElementById("question-text").innerHTML =
        "You asked: " + question + "?";
    }
    
}