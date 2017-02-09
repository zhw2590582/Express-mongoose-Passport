$(document).ready(function() {
  //隐藏服务器消息
  $('.warning-info .btn-clear').on('click',function() {
    $(this).parents('.warning-info').fadeOut();
  })
  setTimeout(function() {
    $('.warning-info').fadeOut();
  }, 1500);

});
