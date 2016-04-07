# keyboard-char-filter
Filter out non characters from keyboard events.

[![Build Status](https://travis-ci.org/orangemug/keyboard-char-filter.svg?branch=master)](https://travis-ci.org/orangemug/keyboard-char-filter)
[![Dependency Status](https://david-dm.org/orangemug/keyboard-char-filter.svg)](https://david-dm.org/orangemug/keyboard-char-filter)
[![Dev Dependency Status](https://david-dm.org/orangemug/keyboard-char-filter/dev-status.svg)](https://david-dm.org/orangemug/keyboard-char-filter#info=devDependencies)


## Install

    npm install orangemug/keyboard-char-filter --save


## Usage

    var keyboardCharFilter = require("keyboard-char-filter");
    var inputEl = document.querySelector(".my-input");
    inputEl.addEventListener("keyup", keyboardCharFilter(function(e) {
      console.log("keycode '%s' is a character", e.keyCode);
    }));



## License
[MIT](LICENSE)
