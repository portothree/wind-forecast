const fs = require('fs');
const axios = require('axios');
const exec = require('child_process').exec;

const noaa = require('./configs/noaa');

function getLatestGrib(outputPath) {
	axios
		.get(noaa.baseDir, { params: noaa.qs, responseType: 'stream' })
		.then(response => {
			response.data.pipe(fs.createWriteStream(outputPath));
		});

	return outputPath;
}

function convertGribToJson(gribPath, outputPath) {
	exec(
		`converter/bin/grib2json --data --output ${outputPath} --names --compact ${gribPath}`,
		{ maxBuffer: 500 * 1024 }
	);

	return 0;
}

function main() {
	const gribPath = 'tmp/latest.grib2';
	const jsonPath = 'tmp/wind-global.json';

	getLatestGrib(gribPath);
	convertGribToJson(gribPath, jsonPath);
}

main();
