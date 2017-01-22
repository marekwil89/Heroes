$(document).ready(function() {
  var i = 5
 
  function count(){

    i = i - 1

    if(i == 0){
      $('.count').text('Arive')
      return i = 6

    }
    
    $('.count').text(i)
  }
  setInterval( count, 1000 );
  
});