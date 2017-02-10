var dialog = require('../js/dialog/dialog');
var parsley = require('../js/parsley/parsley');
var MouseTooltip = require('../js/MouseTooltip/MouseTooltip');

require('spectre.css');
require('../style/base.scss');
require('../FontAwesome/css/font-awesome.min.css');

$(document).ready(function() {
  'use strict';

  //隐藏服务器消息
  $('.warning-info .btn-clear').on('click',function() {
    $(this).parents('.warning-info').fadeOut();
  })
  setTimeout(function() {
    $('.warning-info').fadeOut();
  }, 1500);

  //Tooltip
  MouseTooltip.init();

  //header
  $('#setup').on('click',function() {
    dialog('setup', null, 3000);
  })

  $('#bell').on('click',function() {
    dialog('bell', null, 3000);
  })

  $('#avatarBox').hover(function () {
      $(this).find('.menu').show();
  }, function () {
      $(this).find('.menu').hide();
  });

  //menu
  $('.sub-menu a').each(function(){
    if ($(this).attr('href') === APP_STATE.page) {
      var index = $(this).parents('.sub-menu-item').index();
      $(this).addClass('current').parents('.sub-menu-item').show();
      $('.main-menu li:eq(' + index + ') a').addClass('current');
    }
  });

});
