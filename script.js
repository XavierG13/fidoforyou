$(document).ready(function () {
    // alert("hello world")

    // VARIABLES
    // =====================================================================\\
    // quiz question count
    var questionCount = 0;
    // quiz questions
    var questions = [
        {
            question1: "What size dog are you looking for?",
            choice1: "small",
            choice2: "medium",
            choice3: "large",
        },
        {
            question2: "What kind of temperment are you looking for?",
            choice1: "Friendly",
            choice2: "Obedient",
            choice3: "Independent",
            choice4: "Fearless"
        },
        {
            question2: "What kind of activity are you looking for?",
            choice1: "Herding",
            choice2: "Guarding",
            choice3: "Working",
            choice4: "Sporting"
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

    // questions for loop
    for (var i = 0; i < questions.length; i++) {
        var currentQuestion = questions[i];
        console.log(questions)

        if (currentQuestion[0]) {
        }
    }

     // ajax call to fetch breed image to dogCEO api
    var  breeds = ["germanshepherd", "husky", "stbernard", "beagle", "doberman", "malinois", "greyhound", "collie", "boxer", "poodle"]
    var selectedBreed = "collie"
    var queryURL = "https://dog.ceo/api/breed/" + selectedBreed + "/images"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (dogRes) {
        console.log(dogRes.message[0])
    });


});