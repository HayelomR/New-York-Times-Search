var searchTerm = $("form input-text");
var begin_date = $("form input-text");
var end_date = $("form input-text");
var numberRecords = $("form input-text");

$("search").on("click",function(){
var api = "6e3591efd2444fd99962406791eef9af";
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";.json";url += "?" +
$.param({

      "q": searchTerms
      "begin_date": beginDate
      "end_date": endDate
    "page": numberRecords    })	
$.ajax({
        url: queryURL,
        method: "GET"
      })

      //promise that runs all after our function when we ge a response from ajax call
      .done(function(response) {
      	console.log(response);
      	})
      for(var i = 0; i < response.length;i++){
        var news = resluts[i];

      }
});
})
