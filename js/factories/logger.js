(function () {
	'use strict';
	angular
		.module('shopSite')
		 .factory('API', function($http) {

		 	var token = '7cf16558d759d14815306832bd7341e2';


		 	function getWeather()
		 	{
		 		var call = $http({
		          method: 'GET',
		          headers: {
		            X_CSRF_TOKEN:token,
		          },
		          url: `http://api.openweathermap.org/data/2.5/weather?q=%24%7Bcity%7D&APPID&units=imperia`
		        });

		        return call;
		 	}
		 })	
})();