$(document).ready(function() {
  var quoteSlide = 0

  function quoteSlider(){

    quoteSlide = quoteSlide - 100;
    if(quoteSlide === -400){
      quoteSlide = 0;
    }
    
    $(".slides").css("margin-left", quoteSlide + '%');
  }

  setInterval(quoteSlider, 5000);
});