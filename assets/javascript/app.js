$("#startButton").on("click", function(){
    // console.log("Click is working!")
    $("#startButton").remove();
    for(var i=0; i<questions.length; i++){
        $("#subwrapper").append("<h2>" + questions[i].question + "</h2>")
        for(var j=0; j<questions[i].answers.length; j++){
            $("#subwrapper").append("<input type='radio' name='question-" + i +"'value= '" + questions[i].answers[j] + "'>" + questions[i].answers[j])
        };
    };
});

var questions = [{
    question: "Q1",
    answers:["A1", "A2", "A3", "A4"],
    correctAnswer: "A1",
    }]