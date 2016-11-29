const request = require('request');

var getWeather = (lat, lon) => {
	return new Promise((resolve, reject) => {
		apiKey = 'YOURKEY';	
		request({
			url: `https://api.forecast.io/forecast/${apiKey}/${lat},${lon}`,
			json: true
		}, (error, response, body) => {
			if (!error && response.statusCode === 200) {
				resolve({
					temperature: body.currently.temperature,
					apparentTemperature: body.currently.apparentTemperature,
					});				
			} else { 
				reject('Unable to fetch weather.');			
			}	
		});
	});		
};

module.exports.getWeather = getWeather;