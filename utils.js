const fs = require('fs');
const axios = require('axios');
const exec = require('child_process').exec;

const noaa = require('./configs/noaa');

function getLatestGrib(outputPath, date, period) {
	return axios
		.get(noaa.baseDir, {
			params: {
				file: `gfs.t${period}z.pgrb2.1p00.f000`,
				lev_10_m_above_ground: 'on',
				lev_surface: 'on',
				var_TMP: 'on',
				var_UGRD: 'on',
				var_VGRD: 'on',
				leftlon: 0,
				rightlon: 360,
				toplat: 90,
				bottomlat: -90,
				dir: `/gfs.${date}/${period}`,
			},
			responseType: 'stream',
		})
		.then(response => {
			response.data.pipe(fs.createWriteStream(outputPath));
		});
}

function convertGribToJson(gribPath, outputPath) {
	exec(
		`converter/bin/grib2json --data --output ${outputPath} --names --compact ${gribPath}`,
		{ maxBuffer: 500 * 1024 }
	);

	return 0;
}

module.exports = {
	getLatestGrib,
	convertGribToJson,
};
