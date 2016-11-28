const request = require('request');

request({
	url: 'http://maps.googleapis.com/maps/api/geocode/json?address=Champs-%C3%89lys%C3%A9es',
	json: true
}, (error, response, body) => {
	console.log(body);
});