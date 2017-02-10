var dialog = require('../common/js/dialog/dialog');
var parsley = require('../common/js/parsley/parsley');
var base = require('../common/js/base');

require('spectre.css');
require('../common/style/base.scss');
require('./index.scss');

$(document).ready(function() {
  'use strict';
  $('#login-username').focus();
  $('#login-form').parsley().on('field:validated', function() {
      var error = $(this.$element).hasClass('parsley-error');
      $(this.$element).parent().toggleClass('has-danger', error);
      $(this.$element).parent().toggleClass('has-success', !error);
    }).on('form:submit', function() {
      //dialog('6666', null, 3000);
      //return false;
    });
});
