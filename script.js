// Array to hold the sports buttons that start the page.
var topics = ["Football", "Soccer", "Basketball", "Golf", "Swimming", "Tennis", "Softball", "Baseball", "Boxing", "Climbing", "Track", "Lacrosse"];

// Create a function that will render new buttons with the users input. 

function newButton() {
    // clear out so multiple buttons do not pop up.
    $("#sportsButtons").empty();

    // For loop that will add the new buttons based off the array and also what they get from the user input. 
    for (var i = 0; i < topics.length; i++) {
        // This will create the new button on the fly.
        var button = $("<button>");
        // Add a class to the new button.
        button.addClass("newSports");
        // Add a data-attribute to the new button.
        button.attr("data-name", topics[i]);
        // adding the text to the button from the user input.
        button.text(topics[i]);
        // adding the new button the sportsButtons div.
        $("#sportsButtons").append(button);
    }
}



// function for buttons when they are clicked.
$("#addSport").on("click", function(event) {

    // makes it so that you can press enter also and not just the submits button. 
    event.preventDefault();

    // grabs the user input and trims it and adds it to the new button on the page. 
    var sport = $("#sports-input").val().trim();

    // this line pushes the text input to the array. 
    topics.push(sport);

    // calling the button top run the first function of the array.
    newButton();
});

    // calling the newButton function.
    newButton();

//create a function to hold the event listener for the buttons.
$("#sportsButtons").on("click", function () {

    // Create a variable that will hold the queryURL
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + "Giphy sport" + "&api_key=yi343B3PZW4YT3Sm5QdlWFWLIB2ZXvIw"

    // Creating the ajax call. 
    $.ajax({
        URL: queryURL,
        Method: "GET"
    })
        // create a function that for the ajax response.
        .then(function (response) {
            console.log(queryURL);
            console.log(response);

            // making a variable called feedBack for the ajax request.
            var feedBack = response.data;

            // for loop to loop through all the results.
            for (var i=0; i < feedBack.length; i++) {

                // Creating a P tag to hold the items rating.
                var p = $("<p>").text("Rating: " + results[i].rating);

                // create an image tag on the fly
                var image = $("<img>");

                // setting the src attribute.
                image.attr("src", feedBack[i].images.fixed_height.url);

                // appending the image to the sportsGiphs div
                $("#sportsGiphs").append(p);
                $("#sportsGiphs").append(image);

            }

        })

})

