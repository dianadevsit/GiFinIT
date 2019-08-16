//code done by dwlam790
$(document).ready(function() {
    //api from https://developers.giphy.com/

    //search button
    $("#searchBtn").on('click',function(){
    $("#cargifs").html("");
      
 

    let cargifs = "https://api.giphy.com/v1/gifs/search?q=cars&api_key=JqeAg76X8VwxNiUz8Nt2hSOiuOdP880y&limit=5";
    $.ajax({
      url: cargifs,
      method: "GET",
      dataType: "JSON"}).done(function(response) {
        //find the array with for loop 
        for (var i = 0; i < 4; i++) {
            console.log(response.data[i]);
            $('#gifs').append("<img alt ='"+response.data[i].title+"'src='"+response.data[i].images.fixed_height_downsampled.url+"'>");
          
        }
      }
    
    )}
    )});
