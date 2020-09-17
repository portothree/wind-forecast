const mockAxios = require('axios');

const ForecastController = require('../ForecastController');

jest.mock('axios');

function setup() {
	const req = {};
	const res = {
		status: jest.fn(),
		json: jest.fn(),
	};
	const next = jest.fn();

	return { req, res, next };
}

describe('ForecastController', () => {
	test('getLatest', async () => {
		const { req, res, next } = setup();

		await ForecastController.getLatest(req, res, next);
		expect(res.status).toBeCalledWith(200);
		expect(res.json).toBeCalledWith(expect.any(Array));
	});
});
