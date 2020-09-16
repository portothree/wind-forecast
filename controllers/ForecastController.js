const axios = require('axios');
const noaa = require('../configs/noaa');

module.exports = {
	async getLatest(req, res, next) {
		try {
			const data = [];

			const response = await axios.get(noaa.baseDir, {
				params: noaa.qs,
			});

			res.status(200);
			return res.json(data);
		} catch (error) {
			console.log(error);
			next(error);
		}
	},
};
