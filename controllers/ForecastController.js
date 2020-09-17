const axios = require('axios');

const data = require('../tmp/wind-global.json');

module.exports = {
	async getLatest(req, res, next) {
		try {
			res.status(200);
			return res.json(data);
		} catch (error) {
			next(error);
		}
	},
};
