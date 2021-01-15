require('dotenv').config();
const cron = require('node-cron');

const { getLatestGrib, convertGribToJson } = require('./utils.js');
const gribPath = `${process.env.TMP_PATH}/latest.grib2`;

// Download new GFS data from NCEP in grib2 format
cron.schedule('0 */5 * * *', async () => {
	const now = new Date();
	const year = now.getFullYear();
	const month = ('0' + now.getMonth() + 1).slice(-2);
	const day = now.getDate();

	try {
		await getLatestGrib(gribPath, `${year}${month}${day}`, '00');
	} catch (error) {
		process.exit(1);
	}
});

// Convert grib2 to json
cron.schedule('0 */6 * * *', () => {
	try {
		convertGribToJson(gribPath, `${process.env.TMP_PATH}/wind-global.json`);
	} catch (error) {
		process.exit(1);
	}
});
