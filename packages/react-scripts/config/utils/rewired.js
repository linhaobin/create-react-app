// @remove-file-on-eject
'use strict';
const fs = require('fs');

module.exports = function rewired(rewiredConfigPath, config, ...args) {
  if (fs.existsSync(rewiredConfigPath)) {
    const rewiredConfig = require(rewiredConfigPath);
    if (typeof rewiredConfig === 'function') {
      return rewiredConfig(config, ...args);
      // TODO: return Promise
    }
    // TODO: type object
  }

  return config;
};
