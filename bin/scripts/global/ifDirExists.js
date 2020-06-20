// Required packages.
const fs = require('fs-extra');

const ifDirExists = (dir, errMessage, callback) => {
	try {
		if (dir === undefined) {
			throw new Error(`You must define a directory`);
		}

		if (fs.existsSync(dir)) {
			if (errMessage !== undefined) {
				console.error(errMessage);
			}

			return true;
		}

		if (callback) {
			callback();
		}

		return false;
	} catch (err) {
		console.error(err);
	}
};

module.exports = ifDirExists;
