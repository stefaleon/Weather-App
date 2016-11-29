const request = require('request');

var getWeather = (lat, lon, callback) => {	
	apiKey = 'YOURKEY';	
	request({
		url: `https://api.forecast.io/forecast/${apiKey}/${lat},${lon}`,
		json: true
	}, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature,
				});				
		} else { 
			callback('Unable to fetch weather.');			
		}	
	});
};

module.exports.getWeather = getWeather;