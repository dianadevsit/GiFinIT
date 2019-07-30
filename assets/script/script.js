
// // function gif(response) {
// //   var article= $("<article>");
// //   article.addClass("card")
// // }
// // var getGifSearch = [];
// // var getGif= [];

// // getGifSearch = JSON.parse(localStorage.getItem("gif"));
// // if (Array.isArray(getGifSearch)) {

// // for (var i = 0; i < getGifSearch.length; i++) {
// //     var gif = getGifSearch[i];
// //     getGif(gif);
// //   }

// // }

// // function createGif(response) {
// //   var gif = $("<gif>");
// //   gif.addClass("")
// // }


// //     var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=JqeAg76X8VwxNiUz8Nt2hSOiuOdP880y&q=" + getGif + "&limit=1";

// //     $.ajax({
// //       url: queryURL,
// //       method: "GET"
// //     }).then(function(response) {
// //       document.write(JSON.stringify(response));
  
// //     });

// $("#search").click(function() {
//   var gif = $("#getGif").val();
//   $("")
// })

$(document).ready(function() {
  addButtons();
});
var topics;
var queryURL;
var results;
var getGifSearch;
var newBtn;


function addButtons() {
  for(var i = 0; i < getGifSearch.length; i++) {
    newBtn = $("<button>");
    newBtn.addClass("btn btn primary btn-sm topic-btn");
    newBtn.text(getGifSearch[i]);
    $("#btn-div").append(newBtn);
  }
}

$(document).on("click", ".topic-btn", function() {
  topic = $(this).text();
  if(topic.includes(" ")) {
    topic = topic.replace(/ /g, "+");
  }

  queryURL = "https://api.giphy.com/v1/gifs/search?api_key=JqeAg76X8VwxNiUz8Nt2hSOiuOdP880y&q=" + getGif + "&limit=1";
  $.ajax( { 
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    results = response.data;

  }
})

for (var i = 0; i < results.length; i++) {

  rating = $("<p>");
  rating.attr("class", "rating")
  rating.text("Rating: " + results[i].rating);
  
  topicImg = $("<img>");
  topicImg.attr({ "class": "topic-img",
                  "state": "still",
                  "src": results[i].images.fixed_height_still.url,
                  "still-url": results[i].images.fixed_height_still.url,
                  "animate-url": results[i].images.fixed_height.url });

  imgDiv = $("<div>");
  imgDiv.addClass("img-div");
  imgDiv.append(topicImg, rating);

  $("#images-container").append(imgDiv);
}
});
});

// on-click event handler to toggle animation
$(document).on("click", ".topic-img", function() {

state = $(this).attr("state");

if(state === "still") {

$(this).attr("src", $(this).attr("animate-url"));
$(this).attr("state", "animate");
}

if(state === "animate") {

$(this).attr("src", $(this).attr("still-url"));
$(this).attr("state", "still");
}
});

// on-click event handler to submit added search term
$(document).on("click", "#submit", function(event) {

event.preventDefault();

newSearchTerm = $("#search-term").val();

if(newSearchTerm !== "") {

searchTerms.push(newSearchTerm);

addButtons();

$("#search-term").val("");
}

});

// on-click event handler to submit added search term
$(document).on("click", "#pop", function(event) {

event.preventDefault();

if(searchTerms.length > 0) {

sound.play();
searchTerms.pop();
addButtons();
}
});

