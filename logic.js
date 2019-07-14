//empty array for buttons
buttonsArray = [];


//this is the script to generate buttons for the user to click
function makeButtons() {
  $("#buttons-div").empty();

  for (var i = 0; i < buttonsArray.length; i++) {
    var b = $("<button>");
    b.addClass("gif-button btn btn-secondary");
    b.attr("data-name", buttonsArray[i]);
    b.text(buttonsArray[i]);
    $("#buttons-div").append(b);
  }
}


//on click function to push the user input to buttonsArray
$("#giphy-submit-button").on("click", function (event) {
  event.preventDefault();
  var newButton = $("#button-input").val().trim();
  buttonsArray.push(newButton);
  makeButtons();
  $("#button-input").val("");
});


//function to create the gifs to display on the page
function displayGifs() {

  var userSearch = $(this).attr("data-name");
  //test url for debugging purposes in endpoint formatting 
  //var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9";
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=WsYePO9Erk1jVl9nUATbwsAa3RSdp5Ud&q=" + userSearch + "&limit=10"

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    //console.log(queryURL);
    //console.log("test");
    //console.log(userSearch);

    var results = response.data;
    //loops through all 10 results
    for (var i = 0; i < results.length; i++) {

      var showDiv = $('<div class="col-md-12 subject-display">');
      var defaultAnimatedSrc = results[i].images.fixed_height.url;
      var staticSrc = results[i].images.fixed_height_still.url;
      var showImage = $("<img>");

      showImage.attr("src", staticSrc);
      showImage.addClass("displayed-gif");
      showImage.attr("data-state", "still");
      showImage.attr("data-still", staticSrc);
      showImage.attr("data-animate", defaultAnimatedSrc);


      $("#results-div").prepend(showDiv);
      showDiv.append(showImage);

    }


  });

};

//plays and pauses the gifs
function gifState() {

  var state = $(this).attr("data-state");

  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  }

  else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }

}

//calling the functions to display the gifs and/or play/pause them
$(document).on("click", ".gif-button", displayGifs);
$(document).on("click", ".displayed-gif", gifState);