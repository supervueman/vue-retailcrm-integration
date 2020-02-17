const express = require('express');
const RetailCRM = require('node-retailcrm-api');
require('dotenv').config();

const app = express();

const Client = new RetailCRM.Client({
	siteCode: process.env.SITE_CODWE,
	apiKey: process.env.API_KEY,
	url: process.env.API_URL,
	version: RetailCRM.VERSIONS.V5
});

app.get('/', async (req, res) => {
	Client.orders
		.list()
		.then(response => {
			if (response.isSuccessful() && response.bodyIsHave('orders')) {
				return response.getFromBody('orders');
			}

			throw new Error(response.errorMsg() || 'Some mistake');
		})
		.then(orders => {
			res.send({
				orders
			});
		});
});

app.listen(3000, () => {
	console.log('App listen on http://localhost:3000');
});
