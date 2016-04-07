var debug    = require("debug")("keyboard-char-filter");
var mappings = require("./mappings");


module.exports = function(fn) {
  return function(e) {
    if(e.metaKey) {
      debug("ignored: 'meta'");
    }
    else if(e.ctrlKey) {
      debug("ignored: 'ctrl'");
    }
    else if(mappings.hasOwnProperty(e.keyCode)) {
      debug("ignored: '%s'", mappings[e.keyCode]);
    }
    else {
      debug("valid: %s", e.keyCode)
      fn(e);
    }
  }
};
