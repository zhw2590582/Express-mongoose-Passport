var dialog = require('../common/dialog');
var parsley = require('../common/parsley');

require('spectre.css');
require('../common/style/base.scss');
require('./index.scss');

$(document).ready(function() {
  $('.page-header').on("click", function() {
    dialog('测试一下啦', function() {
      dialog('6666', null, 3000);
    });
  });

  $('#login-form').parsley().on('field:validated', function() {
      var ok = $('.parsley-error').length === 0;
    })
    .on('form:submit', function() {
      //return false;
    });
});
