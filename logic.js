//empty array for buttons
buttonsArray = [];



//on click function to push the user input to buttonsArray
$("#giphy-submit-button").on("click", function (event) {
    event.preventDefault();
    var newButton = $("#button-input").val().trim();
    buttonsArray.push(newButton);
    makeButtons();
});

//this is the script to generate buttons for the user to click
function makeButtons() {

}
