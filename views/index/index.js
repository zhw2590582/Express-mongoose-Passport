var dialog = require('../common/js/dialog/dialog');
var parsley = require('../common/js/parsley/parsley');
var MouseTooltip = require('../common/js/MouseTooltip/MouseTooltip');
var base = require('../common/js/base');

require('spectre.css');
require('../common/style/base.scss');
require('../common/FontAwesome/css/font-awesome.min.css');
require('./index.scss');

$(document).ready(function() {
  'use strict';

  MouseTooltip.init();

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

});
