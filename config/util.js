var glob = require('glob');

var getHash = function(globPath) {
  var name = glob.sync(globPath)[0];
  if (name.indexOf('-') > 0 ) {
    return '-' + name.split('-')[1].split('.js')[0];
  } else {
    return false
  }
};

module.exports = {
  getHash
}
