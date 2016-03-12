$(document).ready(function() {

	$(".contentContainer").css("min-height", $(window).height());

		$('#success').hide();
		$('#failure').hide();
		$('#noCity').hide();

		$('#findMyWeather').click(function(event) {

			$('#success').hide();
			$('#failure').hide();
			$('#noCity').hide();

			var $cityName = $('#city').val();

			if (typeof $cityName === 'string' && $cityName.length > 0) {

				$.get('/location?city=' + $cityName, function (data) {

				}).done(function (data) {

					$("#success").html(data).fadeIn();
					$("#success").prepend('<p id="cityTitle" class="lead">'+ $cityName +'</p>');
					$('#city').val(""); //This doesn't seem to be working

				}).fail(function () {

					$("#failure").fadeIn();

				});

			} else {

				$("#noCity").fadeIn();

			}
		});

		$('#findLocalWeather').click(function(event) {

			$('#success').hide();
			$('#failure').hide();
			$('#noCity').hide();

			$.get('/guessweather', function (data) {

				if (data == "") {

					$("#failure").fadeIn();

				} else {

					$("#success").html(data).fadeIn();

				}

			});

		});



});