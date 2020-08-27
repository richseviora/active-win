'use strict';

module.exports = () => {
	if (process.platform === 'darwin') {
		return require('./lib/macos')();
	}

	if (process.platform === 'linux') {
		return require('./lib/linux')();
	}

	if (process.platform === 'win32') {
		return require('./lib/windows')();
	}

	return Promise.reject(new Error('macOS, Linux, and Windows only'));
};

module.exports.sync = () => {
	if (process.platform === 'darwin') {
		return require('./lib/macos').sync();
	}

	if (process.platform === 'linux') {
		return require('./lib/linux').sync();
	}

	if (process.platform === 'win32') {
		return require('./lib/windows').sync();
	}

	throw new Error('macOS, Linux, and Windows only');
};

module.exports.allWindowsSync = () => {
	if (process.platform === 'darwin') {
		return require('./lib/macos').allWindowsSync();
	}

	if (process.platform === 'linux') {
		throw new Error("Not supported for Linux");
	}

	if (process.platform === 'win32') {
		return require('./lib/windows').allWindowsSync();
	}

	throw new Error('macOS and Windows only');
};

module.exports.allWindowsAsync = () => {
	if (process.platform === 'darwin') {
		return require('./lib/macos').allWindowsAsync();
	}

	if (process.platform === 'linux') {
		throw new Error("Not supported for Linux");
	}

	if (process.platform === 'win32') {
		return require('./lib/windows').allWindowsAsync();
	}

	throw new Error('macOS and Windows only');
};
