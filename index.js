const { getLatestGrib } = require('./utils.js');

function main() {
	const gribPath = 'tmp/latest.grib2';

	const now = new Date();
	const year = now.getFullYear();
	const month = now.getMonth() + 1;
	const day = now.getDate();

	getLatestGrib(gribPath, `${year}${month}${day}`, '00');
}

main();
