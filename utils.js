const noaa = require('./configs/noaa');

async function getGribData() {
	const response = await axios.get(noaa.baseDir, {
		params: noaa.qs,
	});
}
