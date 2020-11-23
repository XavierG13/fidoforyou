$(document).ready(function () {

    // VARIABLES
    // =====================================================================
    
    // var apiKey = "&a5ce4bb6-b633-4cd7-a50e-014671a60a07";


    // LISTENERS
    // =====================================================================



    // FUNCTIONS
    // =====================================================================
    function searchBreed(breed) {
        var queryUrl = "https://api.thedogapi.com/v1/" + breed;
        
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (breedResults) {
        var height = breedResults.height.imperial;
        console.log(breedResults)
    })

    }


});