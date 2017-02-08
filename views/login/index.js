var dialog = require('../common/dialog');

require('spectre.css');
require('./index.scss');

$(document).ready(function() {
  $('.page-header').on("click", function() {
    dialog('测试一下啦', function () {
      dialog('6666', null, 3000);
    });
  });
});
