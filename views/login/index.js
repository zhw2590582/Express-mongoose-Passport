var dialog = require('../common/dialog');

require('spectre.css');
require('./index.scss');

$(document).ready(function() {
  $('.page-header').on("click", function() {
    dialog('测试一下啦', function () {
      dialog('6666', null, 3000);
      notyf.alert('You must fill out the form before moving forward');
    });
  });
  notyf.confirm('Your changes have been successfully saved!');
});
