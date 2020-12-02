$(document).ready(function () {

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
    // users breed Options
    var userOptions = [];

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
            name: "Briard",
            size: "Large",
            temperment: "Courageous",
            breedGroup: "Herding"
        },
        {
            name: "Malamute",
            size: "Large",
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
            name: "Samoyed",
            size: "Medium",
            temperment: "Friendly",
            breedGroup: "Working",
        },
        {
            name: "Greyhound",
            size: "Medium",
            temperment: "Intelligent",
            breedGroup: "Hound",
        },
        {
            name: "Basenji",
            size: "Medium",
            temperment: "Intelligent",
            breedGroup: "Hound"
        },
        {
            name: "Boxer",
            size: "Medium",
            temperment: "Courageous",
            breedGroup: "Working"
        },
        {
            name: "Rottweiler",
            size: "Large",
            temperment: "Courageous",
            breedGroup: "Working"
        },
    ]
    // LISTENERS
    // =====================================================================
    // on start quiz event
    $("#start-btn").on("click", function () {
        // hide quiz info 
        $(".quiz-info").fadeToggle(10);
        // display  choices content for each question
        choice1.text(questionDis[questionIndex].choices[0]);
        choice2.text(questionDis[questionIndex].choices[1]);
        choice3.text(questionDis[questionIndex].choices[2]);
        // calling function renderQuestion
        renderQuestion();
    });

    // first choice selection click event
    $(".choice-1").on("click", function () {
        // saves first selection content as string
        userOptions[questionIndex] = questionDis[questionIndex].choices[0];
        // console.log(userOptions)
        userOptions.push($("this").text())
    });

    // second choice selection click event
    $(".choice-2").on("click", function () {
        // saves second selection content as string
        userOptions[questionIndex] = questionDis[questionIndex].choices[1];
        // console.log(userOptions)
        userOptions.push($("this").text())
    });

    // thirds choice selection click event
    $(".choice-3").on("click", function () {
        // saves third selection content as string
        userOptions[questionIndex] = questionDis[questionIndex].choices[2];
        // console.log(userOptions)
        userOptions.push($("this").text())
    });

    // on to next question click event 
    $(".next-question").on("click", function () {
        if (questionIndex < 2)
            questionIndex++;

        else {
            (questionIndex >= 2)
            breedSuggestions();
            // console.log(questionIndex)
        }
        // console.log(questionIndex)
        // display  choices content for each question
        choice1.text(questionDis[questionIndex].choices[0]);
        choice2.text(questionDis[questionIndex].choices[1]);
        choice3.text(questionDis[questionIndex].choices[2]);
        // calling function renderQuestion
        renderQuestion();
    });

    // view results click event
    $(".view-results").on("click", function () {
        $(".questions-section").fadeToggle(10);
        breedSuggestions();
    });

    // FUNCTIONS
    // ====================================================================
    // hide quiz results 
    $(".quiz-results").fadeToggle(10);
    // function to display quiz questions accordingly
    function renderQuestion() {
        // variable to go through question in questionDis object
        var currentQuestion = questionDis[questionIndex];
        // displays question based on the index/number
        questionTitle.text(currentQuestion.question);
        // console.log(currentQuestion)
    }

    // function takes user to dog breed suggestion based on selections
    function breedSuggestions() {
        // array that will  hold values of 'dogBreed' array of objects declered on line 34
        var breedVal = [];
        //  array that will hold matched 'dogBreed' from user selections
        var suggestedDogs = [];
        // for loop that goes thorough object of arrays
        for (var i = 0; i < dogBreed.length; i++) {
            breedVal.push(Object.values(dogBreed[i]))
            // console.log(breedVal)
            // if statement to add the objecet that coditions apply to suggestedDogs array on line 176
            if (breedVal[i].includes(userOptions[0]) && ((breedVal[i].includes(userOptions[1])) || (breedVal[i].includes(userOptions[2])))) {
                suggestedDogs.push(breedVal[i])
                renderDogImages(suggestedDogs);
            }
        }
        // console.log(suggestedDogs)
    }

    // ajax call to fetch breed image from dogCEO api
    function getDogImage(userSelectedBreed) {
        userSelectedBreed = userSelectedBreed.toLowerCase()
        var queryURL = "https://dog.ceo/api/breed/" + userSelectedBreed + "/images"
        var result = $.ajax({
            url: queryURL,
            method: "GET",
            async: false
        });
        return result.responseJSON.message[2];
    }

    // function includes for loop that goes through suggested dog array  
    function renderDogImages(suggestedDogs) {
        for (var i = 0; i < suggestedDogs.length; i++) {
            // variable declared to get the "breed name" from suggestedDogs array at position 0 
            var currentDogBreed = suggestedDogs[i][0]
            var breedImg = getDogImage(currentDogBreed);
            // console.log("breedImg", breedImg)
            console.log("currentDogBreed", currentDogBreed)

            dogImgCard();
        }

        function dogImgCard(breedImg) {
            var card = $("<div>").addClass("img-card");
            var cardBody = $("<div>").addClass("img-card-body").text(breedImg);
            var dogImage = $("<img>").width(300).height(300).addClass("dog-image").attr("src", image);

            $(card).append(cardBody, dogImage);
            $(".quiz-results").append(card);
        }

    };

});