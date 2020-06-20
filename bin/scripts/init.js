// Required packages.
const fs = require('fs-extra');

// Import Moduels.
const ifDirExists = require('./global/ifDirExists');
const clone = require('./clone');

const init = (repo, localDir, command) => {
	ifDirExists(`${localDir}/${command}`, `The component ${command} already exists!`, clone(repo, localDir, command));
};

module.exports = init;
