$(document).ready(function () {
    // alert("hello world")

    // VARIABLES
    // =====================================================================
    // quiz question count
    var questionIndex = 0;
    // current question display
    var questionTitle = $(".question-title");
    // choice options
    var choice1 = $(".choice-1");
    var choice2 = $(".choice-2");
    var choice3 = $(".choice-3");
    // users choice
    var userChoice = [];
    // suggested breed
    var returnDog = []
    // quiz questions
    var questionDis = [
        {
            question: "What size dog are you looking for?",
            choices: ["Small", "Medium", "Large"]
        },
        {
            question: "What kind of temperment are you looking for?",
            choices: ["Friendly", "Courgeous", "Intelligent",]
        },
        {
            question: "What kind of activity are you looking for?",
            choices: ["Working", "Herding", "Hound"]

        }
    ]
    // dog breed possible suggestions
    var dogBreed = [
        {
            name: "Husky",
            size: "Large",
            temperment: "Friendly",
            breedGroup: "Working"
        },
        {
            name: "German Shepard",
            size: "Large",
            temperment: "Courageous",
            breedGroup: "Herding"
        },
        {
            name: "Saint Bernard",
            size: "Small",
            temperment: "Friendly",
            breedGroup: "Working"
        },
        {
            name: "Beagle",
            size: "Small",
            temperment: "Friendly",
            breedGroup: "Hound"
        },
        {
            name: "Doberman",
            size: "Large",
            temperment: "Courageous",
            breedGroup: "Working",
        },
        {
            name: "Belgian Malinois",
            size: "Large",
            temperment: "Friendly",
            breedGroup: "Herding",
        },
        {
            name: "Greyhound",
            size: "Medium",
            temperment: "Intelligent",
            breedGroup: "Hound",
        },
        {
            name: "Border Collie",
            size: "Medium",
            temperment: "Intelligent",
            breedGroup: "Herding"
        },
        {
            name: "Boxer",
            size: "Medium",
            temperment: "Courageous",
            breedGroup: "Working"
        },
        {
            name: "Poodle",
            size: "Large",
            temperment: "Intelligent",
            breedGroup: "Working"
        },
    ]
    // LISTENERS
    // =====================================================================
    // on start quiz event



    $(".start-btn").on("click", function () {
        // hide quiz info 
   $(".quiz-info").fadeToggle(10);
       
        // display  choices content for each question
        choice1.text(questionDis[questionIndex].choices[0]);
        choice2.text(questionDis[questionIndex].choices[1]);
        choice3.text(questionDis[questionIndex].choices[2]);
        renderQuestion();

    });
    // first choice selection click event
    $(".choice-1").on("click", function () {
        // saves first selection content as string
        userChoice[questionIndex] = questionDis[questionIndex].choices[0];
        // console.log(userChoice)
    });
    // second choice selection click event
    $(".choice-2").on("click", function () {
        // saves second selection content as string
        userChoice[questionIndex] = questionDis[questionIndex].choices[1];
        // console.log(userChoice)
    });
    // thirds choice selection click event
    $(".choice-3").on("click", function () {
        // saves third selection content as string
        userChoice[questionIndex] = questionDis[questionIndex].choices[2];
        // console.log(userChoice)
    });


    // on to next question click event 
    $(".next-question").on("click", function () {
        if (questionIndex < 2)
            questionIndex++;

        else {
            (questionIndex >= 2)
            quizCompleted();
            console.log(questionIndex)
        }
        console.log(questionIndex)
        // display  choices content for each question
        choice1.text(questionDis[questionIndex].choices[0]);
        choice2.text(questionDis[questionIndex].choices[1]);
        choice3.text(questionDis[questionIndex].choices[2]);
        renderQuestion();
    });

    // view results click event
    $(".view-results").on("click", function (){

    });


// See Results (breed suggestions)

    // FUNCTIONS
    // =====================================================================

    // function to display quiz questions accordingly
    function renderQuestion() {
        // variable to go through question in questionDis object
        var currentQuestion = questionDis[questionIndex];
        // displays question based on the index/number
        questionTitle.text(currentQuestion.question);
        // console.log(currentQuestion) 
    }

    // function takes user to dog breed suggestion based on selections
    function quizCompleted() {
        var breedSuggestion = $(".breed-suggestion")
        console.log(quizCompleted)


    }

    // ajax call to fetch breed image to dogCEO api
    // var breeds = ["germanshepherd", "husky", "stbernard", "beagle", "doberman", "malinois", "greyhound", "collie", "boxer", "poodle"]
    var selectedBreed = "collie"
    var queryURL = "https://dog.ceo/api/breed/" + selectedBreed + "/images"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (dogRes) {
        // console.log(dogRes.message[0])
    });


});