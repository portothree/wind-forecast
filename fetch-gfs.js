require('dotenv').config();

const { getLatestGrib, convertGribToJson } = require('./utils.js');
const gribPath = `${process.env.TMP_PATH}/latest.grib2`;

// Download new GFS data from NCEP in grib2 format
(async () => {
	const now = new Date();
	const year = now.getFullYear();
	const month = ('0' + (now.getMonth() + 1)).slice(-2);
	const day = now.getDate();

	try {
		await getLatestGrib(gribPath, `${year}${month}${day}`, '00');
		console.log("New GFS data from NCEP downloaded with success");
	} catch (error) {
		process.exit(1);
	}
})();
