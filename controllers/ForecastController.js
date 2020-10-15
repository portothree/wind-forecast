const fs = require('fs');
const axios = require('axios');

module.exports = {
	async getLatest(req, res, next) {
		try {
			// fs runs in the project path
			if (fs.existsSync('tmp/wind-global.json')) {
				const data = require('../tmp/wind-global.json');

				res.status(200);
				return res.json(data);
			}

			return res.json({ message: 'No available data found' });
		} catch (error) {
			next(error);
		}
	},
};
