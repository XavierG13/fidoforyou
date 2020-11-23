$(document).ready(function () {
  var apiKey = "AIzaSyA64b1DkpGo3cvuJMzoxLGXlfF9L6Kl4ME";
  var booksEl = document.getElementById("books");

  function searchBooks(book) {
    var queryUrl = "https://www.googleapis.com/books/v1/volumes?q=";
    care = "-care";
    console.log(queryUrl);

    queryUrl = queryUrl + book + care + apiKey;
    console.log(queryUrl);

    $.ajax({
      url: queryUrl,
      method: "GET",
    }).then(function (bookResults) {
      console.log(bookResults);
    });
  }
});
