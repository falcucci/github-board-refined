$(document).ready(function(){
  setTimeout( function() {
    $('.Details').each(function(i, obj) {
      $(obj).removeClass('Details--on')
    });
  }, 700)
})
