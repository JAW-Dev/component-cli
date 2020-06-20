#!/usr/bin/env node

// Import Moduels.
const init = require('./scripts/init');

const args = process.argv.slice(2);
const repoName = 'jawittdesigns';
const repoUrl = 'https://github.com';
const localDir = 'components';

args.forEach(arg => {
	const repo = `${repoUrl}/${repoName}/${arg}`;
	init(repo, localDir, arg);
});
