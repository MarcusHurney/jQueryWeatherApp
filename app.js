
 
    var express = require('express');
	var weather = require('./public/js/weather.js');
	var location = require('./public/js/location.js');

	var app = express();
	var PORT = process.env.PORT || 3000;

	app.use(express.static(__dirname + '/public'));

	app.get('/', function (req, res) {
    	res.send(__dirname + '/public/index.html');
	});

	app.listen(PORT, function() {
		console.log('Express Server Started on port ' + PORT);
	});

	app.get('/location', function(req, res) {

		var city = req.query.city;

		weather(city).then(function (currentWeather) {

			res.json(currentWeather);

		}, function (error) {

			res.status(404).json(error);
			
		});

	});

	app.get('/guessweather', function(req, res) {

		location().then(function (guessedLocation) {

			weather(guessedLocation).then(function (guessedWeather) {

				res.json(guessedWeather);

			});
			
		});

	});

