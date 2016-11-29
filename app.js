const yargs = require('yargs');

const geocode = require('./geocode');
const weather = require('./weather');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;


geocode.geocodeAddress(argv.address, (errorMessage, geoResults) => {
	if (errorMessage) {
		console.log(errorMessage);
	} else {
		console.log(geoResults.address);
		weather.getWeather(geoResults.latitude, geoResults.longitude, (errorMessage, weatherResults) => {
			if (errorMessage) {
				console.log(errorMessage);
			} else {
				console.log(JSON.stringify(weatherResults, undefined, 2));
			}
		});
	}
});




