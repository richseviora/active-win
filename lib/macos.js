'use strict';
const path = require('path');
const {promisify} = require('util');
const childProcess = require('child_process');

const execFile = promisify(childProcess.execFile);
const bin = path.join(__dirname, '../main');

const parseMac = (stdout) => {
	try {
		const result = JSON.parse(stdout);
		if (result !== null) {
			result.platform = 'macos';
			return result;
		}
	} catch (error) {
		console.error(error);
		throw new Error('Error parsing window data');
	}
};

const getActiveWindow = (stdout) => {
	return parseMac(stdout).find((window) => window.active === true);
};

module.exports = async () => {
	const {stdout} = await execFile(bin);
	return getActiveWindow(stdout);
};

module.exports.sync = () =>
	getActiveWindow(childProcess.execFileSync(bin, {encoding: 'utf8'}));

module.exports.allWindowsAsync = async () => {
	const {stdout} = await execFile(bin);
	return parseMac(stdout);
};

module.exports.allWindowsSync = () => {
	return parseMac(childProcess.execFileSync(bin, {encoding: 'utf8'}));
};
