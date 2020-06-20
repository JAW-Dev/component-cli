// Required packages.
const git = require('simple-git/promise');
const fs = require('fs-extra');

const clone = (repo, localDir, command) => {
	try {
		git()
			.clone(repo, `${localDir}/${command}`)
			.then(() => {
				const gitHist = `${localDir}/${command}/.git`;
				fs.removeSync(gitHist);
			})
			.catch(err => {
				return;
			});
	} catch (e) {
		console.error(e);
	}
};

module.exports = clone;
