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
});


