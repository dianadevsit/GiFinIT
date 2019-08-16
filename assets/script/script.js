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
      dataType: "JSON",
      success: function(cars) {
        let output = "";
        let latestCars = cars.avatar_url;
        //find the array with for loop 
        for (var i = 0; i < 4; i++) {
            output += `
             
             <div class="card clearfix" style="width: 18rem; display:float;">
              <img src="${latestCars[i].avatar_url}" class="card-img-top">
          
             </div>
             `;
          //  console.log(latestCars);
        }
      }
    }
    )}
    )});
