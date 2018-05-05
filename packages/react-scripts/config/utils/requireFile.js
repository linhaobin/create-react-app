// @remove-file-on-eject
'use strict';
const fs = require('fs');

module.exports = function requireFile(filename, callback) {
  let file = undefined;
  if (fs.existsSync(filename) && fs.statSync(filename).isFile()) {
    file = require(filename);
  }

  callback(file);
};
