var dialog = require('../common/dialog');
var parsley = require('../common/parsley');

require('spectre.css');
require('./index.scss');

$(document).ready(function() {
  console.log(parsley);
  $('.page-header').on("click", function() {
    dialog('测试一下啦', function () {
      dialog('6666', null, 3000);
    });
  });
});
