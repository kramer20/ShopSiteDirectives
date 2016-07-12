(function() {
    'use strict';

    angular
    .module('shopSite')
    .directive('weather', function (API){
    	return {
    		restrict: 'E',
    		templateUrl:"./views/partials/weather.html",
    		link: function (scope, element, attrs) {

    			var city = attrs.city;

    			var data = API.getWeather(city);

    			data.then(function(response){
    				scope.data = response.data;
    			})
    		}
    	};

    })

})();    