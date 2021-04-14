require('dotenv').config();

const { getLatestGrib, convertGribToJson } = require('./utils.js');
const gribPath = `${process.env.TMP_PATH}/latest.grib2`;

// Convert grib2 to json
(() => {
	try {
		convertGribToJson(gribPath, `${process.env.TMP_PATH}/wind-global.json`);
		console.log("GRIB2 file converted to JSON with success");
	} catch (error) {
		process.exit(1);
	}
})();
