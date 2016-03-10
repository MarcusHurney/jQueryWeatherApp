var request = require('request');

module.exports = function (location) {

	return new Promise(function (resolve, reject) {

		var encodedLocation = encodeURIComponent(location);

		var API_KEY = '4da55b76fff8900a19483e261af4a928';

		var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=imperial&appid=' + API_KEY;

		if (!location) {

			return reject('No location provided');

		} 

		request({url: url, json: true}, function (error, response, body) {
			
			if (error || body.cod === '404') {

				return reject('Unable to fetch weather.');

			} else {

				return resolve('The current temperature in ' + body.name + ' is ' + body.main.temp + ' degrees farenheit with humidity at ' + body.main.humidity + '%.');

			}

		});
			
		
	});
	
}