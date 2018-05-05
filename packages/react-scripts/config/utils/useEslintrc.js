// @remove-file-on-eject
'use strict';
const fs = require('fs');
const path = require('path');
const paths = require('../paths');

const CONFIG_FILES = [
  '.eslintrc.js',
  '.eslintrc.yaml',
  '.eslintrc.yml',
  '.eslintrc.json',
  '.eslintrc',
];

function existsConfigFile() {
  return CONFIG_FILES.some(configFile => {
    const filename = path.resolve(paths.eslintrcPath, configFile);

    return fs.existsSync(filename) && fs.statSync(filename).isFile();
  });
}

module.exports = !!(
  existsConfigFile() || require(paths.appPackageJson).eslintConfig
);
