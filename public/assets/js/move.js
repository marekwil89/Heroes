$(document).ready(function() {

  var i = 0
  var img = '.fog'
  var speed = 13

  function moveMist(){

    i++
    $(img).css('background-position', i + 'px 0')

  }

  setInterval( moveMist);

});
