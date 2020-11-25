$(document).ready(function () {
  var apiKey = "&appid=AIzaSyA64b1DkpGo3cvuJMzoxLGXlfF9L6Kl4ME";

  var submit = document.getElementById("submitBtn");
  var input = document.getElementById("searchBook");

  var bookResultsEl = document.getElementById("book-results");
  // var booksEl = document.getElementById("books");
  // var searchBooksEl = document.getElementById("searchBooks");

  currentBookCount = 0;

  function searchBooks(book) {
    var queryUrl = "https://www.googleapis.com/books/v1/volumes?q=";
    care = "-care";
    // console.log(queryUrl);

    queryUrl = queryUrl + book + care + apiKey;
    // console.log(queryUrl);

    // for (let i = 0; i < results.length; i++)

    $.ajax({
      url: queryUrl,
      method: "GET",
    }).then(function (bookResults) {
      // console.log(bookResults);

      // this variables will hold the book results.
      var results = bookResults.items;
      console.log(results);

      // var i = 0;
      for (var i = 0; i < results.length; i++) {
        var currentArrayItem = results[i];
        console.log(currentArrayItem);

        // this will check to see if the book has the images to use on the card
        if (currentArrayItem.volumeInfo.imageLinks && currentBookCount < 3) {
          console.log(currentBookCount);
          console.log("Has images");
          currentBookCount++;

          buildCard(currentArrayItem);
        } else if (currentBookCount >= 3) {
          break;
        } else {
          console.log("has no images");
        }

        results[i].innerHTML = "";

        // this function will create the card with the information of title, author, and image of the book
        function buildCard(bookObject) {
          var card = $("<div>").addClass("card");
          var cardBody = $("<div>")
            .addClass("card-body-1 card-title font-weight-bold")
            .text(bookObject.volumeInfo.title);
          console.log(bookObject.volumeInfo.title);
          var cardAuthor = $("<p>").addClass("author").text(bookObject.volumeInfo.authors)
          var cardImg = $("<img>")
            .width(200)
            .height(200)
            .addClass("book-image")
            .attr("src", bookObject.volumeInfo.imageLinks.thumbnail);

          $(card).append(cardBody,cardAuthor, cardImg);
          $(bookResultsEl).append(card);
        }
      }
    });
  }

  $(submit).click(function () {
    // console.log($(input).val());
    searchBooks($(input).val());
    $("#book-results").empty();
    currentBookCount = 0;
  });
});
