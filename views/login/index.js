var dialog = require('../common/dialog/dialog');
var parsley = require('../common/parsley/parsley');
var base = require('../common/js/base');

require('spectre.css');
require('../common/style/base.scss');
require('./index.scss');

$(document).ready(function() {

  //dialog('6666', null, 3000);

  $('#login-form').parsley().on('field:validated', function() {
      var ok = $('.parsley-error').length === 0;
    })
    .on('form:submit', function() {
      //return false;
    });
});
