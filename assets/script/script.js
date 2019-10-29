//code done by dwlam790
//serach giphy to pull 10 gifs after entering a search term
//display then will show to the user

//click function 
$("#search").click(function() {
    let giphy = $("#giphy-name").val();
    $("#giphy1").html("");
    gifinIt(giphy);
  });

  function gifinIt(giphy) {
//endpoint for Giphy API
 let queryURL ="https://api.giphy.com/v1/gifs/search?api_key=JqeAg76X8VwxNiUz8Nt2hSOiuOdP880y="+giphy+"&limit=10&offset=0&rating=G&lang=en";
//ajax call  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      if (response.Response === "False") {
        alert(response.Error);
      }
      else {
        for (i=0; i<response.data.length; i++){
          $("#giphy1").append("<img src=" + response.data[i].images.fixed_width.url + "id=img" + i + ">");
        }
      }
  });
}

