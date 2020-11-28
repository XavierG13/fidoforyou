$(document).ready(function () {
    // alert("hello world")

    // VARIABLES
    // =====================================================================

    // quiz question count
    var questionCount;
    // current question display
    var currentQuestion = $(".current-question");
    // choice options
    var choice1 = $(".choice-1");
    var choice2 = $(".choice-2");
    var choice3 = $(".choice-3");
    // users choice
    var userChoice = [];
    var dogReturn = [];
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
    // options of dog breeds and information 
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
        // for loop though questions
        for (var i = 0; i < questionDis.length; i++) {
            currentQuestion = questionDis[i].question;

            console.log(currentQuestion)
            questionCount = 0;

            if (currentQuestion < 2)
                questionCount++;
            else {
                (currentQuestion >= 2)
                dogReturn;
            }
        }
        // display each choices content for each question
        choice1.text(questionDis[questionCount].choices[0]);
        choice2.text(questionDis[questionCount].choices[1]);
        choice3.text(questionDis[questionCount].choices[2]);
    });

    // 1) display question
    // 2) attach andswer to its specific question
    // 3) store selection in dorReturn funciton
    // 4) compare selection to dogBreed object of arrays

    $(".choice-1").on("click", function () {
        userChoice[questionCount] = questionDis[questionCount].choices[0];

        console.log(userChoice)
    });
    $(".choice-2").on("click", function () {
        // storing  question 1 answer
        userChoice[questionCount] = questionDis[questionCount].choices[1];
        console.log(userChoice)
    });
    $(".choice-3").on("click", function () {
        // storing  question 1 answer
        userChoice[questionCount] = questionDis[questionCount].choices[2];
        console.log(userChoice)
    });
    // console.log(currentQuestion)

    // on to next question
    $(".next-question").on("click", function () {
        if (questionCount < 2)
            questionCount++;
        else {
            questionCount = 0
        }
        console.log(questionCount)
        // display each button content
        choice1.text(questionDis[questionCount].choices[0]);
        choice2.text(questionDis[questionCount].choices[1]);
        choice3.text(questionDis[questionCount].choices[2]);
    })

    // FUNCTIONS
    // =====================================================================

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