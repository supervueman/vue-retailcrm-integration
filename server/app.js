const express = require('express');
const RetailCRM = require('node-retailcrm-api');
require('dotenv').config();

const app = express();

app.use((req, res, next) => {
	const allowedOrigins = 'http://localhost:8080';
	const origin = req.headers.origin;

	if (allowedOrigins === origin) {
		res.setHeader('Access-Control-Allow-Origin', origin);
	}

	res.setHeader(
		'Access-Control-Allow-Methods',
		'OPTIONS, GET, POST, PUT, PATCH, DELETE'
	);

	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

	if (req.method === 'OPTIONS') {
		return res.sendStatus(200);
	}

	next();
});

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
			res.send(orders);
		});
});

app.listen(3000, () => {
	console.log('App listen on http://localhost:3000');
});
