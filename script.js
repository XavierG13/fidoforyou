$(document).ready(function () {
    // alert("hello world")

    // VARIABLES
    // =====================================================================

    // quiz question count
    var questionCount;
    // current question display
    var currentQuestion = $(".current-question")
    // choice options
    var choice1 = $(".choice-1")
    var choice2 = $(".choice-2")
    var choice3 = $(".choice-3")
    // users choice
    var userChoice = [];
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

    // FUNCTIONS
    // =====================================================================

    // on start
    $(".start-btn").on("click", function () {
        currentQuestion.textContent = questionDis[0].question;
        questionCount = 0;
        choice1.textContent = questionDis[questionCount].choices[0];
        choice2.textContent = questionDis[questionCount].choices[1];
        choice3.textContent = questionDis[questionCount].choices[2];

        console.log(currentQuestion)
    });
    $(".choice-1").on("click", function () {
        // storing  question 1 answer
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

    // choice1.textContent = questionDis[i].choices[0];
    // choice2.textContent = questionDis[i].choices[1];
    // choice3.textContent = questionDis[i].choices[2];

    // renderQuestion();
    // console.log(questionDis[i]);

    // on next
    $(".next-question").on("click", function () {
        if (questionCount < 2)
            questionCount++;
        else {
            questionCount = 0
        }
        console.log(questionCount)
        choice1.textContent = questionDis[questionCount].choices[0];
        choice2.textContent = questionDis[questionCount].choices[1];
        choice3.textContent = questionDis[questionCount].choices[2];
    })



    // console.log(currentQuestion)

    // store user choice selected

    // ajax call to fetch breed image to dogCEO api
    var breeds = ["germanshepherd", "husky", "stbernard", "beagle", "doberman", "malinois", "greyhound", "collie", "boxer", "poodle"]
    var selectedBreed = "collie"
    var queryURL = "https://dog.ceo/api/breed/" + selectedBreed + "/images"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (dogRes) {
        // console.log(dogRes.message[0])
    });


});