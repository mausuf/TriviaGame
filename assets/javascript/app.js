$("#startButton").on("click", function(){
    // console.log("Click is working!")
    game.start();
});

var questions = [{
    question: "1) In which town do the Simpsons reside?",
    answers:["Springfield", "Shelbyville", "Seinfeld"],
    correctAnswer: "Springfield",
    }, 
    {
    question: "2) Who is Mr Burns' assistant?",
    answers:["Seymour Skinner", "Barnard Gumble", "Waylon Smithers"],
    correctAnswer: "Waylon Smithers",
    },
    {
    question: "3) What is the name of the bar where Homer drinks?",
    answers:["Moe's Tavern", "Joe's Cavern", "he Drink Hole"],
    correctAnswer: "Moe's Tavern",
    },
    {
    question: "4) What did the Simpsons get for their first Christmas?",
    answers:["A dog", "A cat", "A hamster"],
    correctAnswer: "A dog",
    },
    {
    question: "5) Who runs the Kwik-E-Mart?",
    answers:["Homer", "Apu", "Mr. Burns"],
    correctAnswer: "Apu",
    },
    {
    question: "6) What is the name of the school bus driver?",
    answers:["Otto", "Blotto", "Martin"],
    correctAnswer: "Otto",
    },
    {
    question: "7) What is Chief Wiggum's first name?",
    answers:["Cletus", "Clancey", "Charlie"],
    correctAnswer: "Clancey",
    },
    {
    question: "8) What did Homer smuggle on board the space shuttle?",
    answers:["A bag of potato chips", "A tub of gummi beers", "Duff Beer"],
    correctAnswer: "A bag of potato chips",
    },
    {
    question: "9) What is Sideshow Bob's middle name?",
    answers:["Terwilliger", "Robert", "Underdunk"],
    correctAnswer: "Underdunk",
    },
    {
    question: "10) What is the name of the first Simpsons episode aired in the U.S.?",
    answers:["Bart the Genius", "Simpsons Roasting On An Open Fire", "Some Enchanted Evening"],
    correctAnswer: "Simpsons Roasting On An Open Fire",
    }
]

// Score and counter
var game = {
    correct: 0, 
    incorrect: 0, 
    counter: 30,
    
    countDown: function(){
        game.counter--;
        $("#counter").html(game.counter)
        if(game.counter<=0){
            // console.log("Time is up!");
            alert("Time is up!");
            game.done();
        }
    },
    start: function(){
        timer = setInterval(game.countDown,1000);
        $("#subwrapper").prepend("<h2>Time Remaining: <span id='counter'>30</span> Seconds </h2>");
        $("#startButton").remove();
        for(var i=0; i<questions.length; i++){
        $("#subwrapper").append("<h2>" + questions[i].question + "</h2>")
        for(var j=0; j<questions[i].answers.length; j++){
            $("#subwrapper").append("<input type='radio' name='question-" + i +"'value= '" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
    },
    done: function(){
        $.each($("input[name='question-0']:checked"),function(){
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"),function(){
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"),function(){
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"),function(){
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"),function(){
            if($(this).val()==questions[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"),function(){
            if($(this).val()==questions[5].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"),function(){
            if($(this).val()==questions[6].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"),function(){
            if($(this).val()==questions[7].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-8']:checked"),function(){
            if($(this).val()==questions[8].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-9']:checked"),function(){
            if($(this).val()==questions[9].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
        },

        result: function(){
                clearInterval(timer);
                $("#subwrapper h2").remove();
                $("#subwrapper").html("<h2>Complete!</h2>");
                $("#subwrapper").append("<h3>Correct Answers: " + this.correct + "</h3>");
                $("#subwrapper").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
                $("#subwrapper").append("<h3>Unanswered: " + (questions.length-(this.incorrect+this.correct)) + "</h3>");
    },
};



