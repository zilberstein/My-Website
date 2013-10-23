$('.tab').click(function(e) {
  var tab = $(e.target).attr('tab');
  var tgt = $('li[tab=' + tab + ']');
  $('#' + tab).addClass('faded');
  var prev = $('li.active');
  prev.removeClass('active');
  $('.main.active').addClass('faded');
  setTimeout(function(){
    $('.main.active').removeClass('active');
    $('#' + tab).addClass('active');
  }, 500);
  tgt.addClass('active');
  $('#' + tab).addClass('active')
  setTimeout(function(){
    $('#' + tab).removeClass('faded');
  }, 100);
})