/*global $*/
// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
  
  function giphyURLWithSearchTerm(searchTerm) {
    // write a function that will return a url for the giphy API with
    // the searchTerm provided in the parameters
}

function appendImageToBody(srcURL) {
    // write a function that will append an <img> to the body with the
    // URL provided in the parameters
    $('#giphy').append('<img src=' + srcURL + '>');
}

function callGiphyAPIWithSearchTerm(searchTerm) {
    $.ajax({
      url: "https://api.giphy.com/v1/stickers/search?q="+searchTerm+"&api_key=dc6zaTOxFJmzC",
      method: "GET",
      success: function(response) { 
          if(response.data.length > 0){
           var url = response.data[0].images.original.url;
           appendImageToBody(url);
              
          }else{
              
              $('#giphy').append('<h1>' + 'Can not find your search term(s).' + '</h1>');
              
          }
           
      },
    }); 
}

//Add a click handler below to call the function when the button is clicked
$("#button1").click(function() {
    
    var searchTerm1 = $("#input1").val();
    var searchTerm2 = $("#input2").val();
    callGiphyAPIWithSearchTerm(searchTerm1+searchTerm2);

    
});
  
  
  
});
