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



geocode.geocodeAddress(argv.address).then((geoResults) => {
	console.log(geoResults.address);
	weather.getWeather(geoResults.latitude, geoResults.longitude).then((weatherResults) => {
		console.log(JSON.stringify(weatherResults, undefined, 2));
	}).catch((errorMessage) => {
		console.log(errorMessage);
	});
}).catch((errorMessage) => {
	console.log(errorMessage);
});
