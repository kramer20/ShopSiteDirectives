(function () {
	'use strict';
	angular
		.module('shopSite')
		.factory('API', function($http) {

			function getBikes(){

		        var details = {
		        image:"http://cdn.grindtv.com/wp-content/uploads/2013/10/citybike_purecity.jpg",
		        name:"Slow Ride",
		        price:125,
		        description:"Cycle ipsum dolor amet bmx brakes alpe du huez, pedal gear stoked power meter sufferlandria hillclimb specialized. Crank peter sagan IWBMATTKYT, groupset strava bmx shimano roadie tube frame alpe du huez.",
		       	id:0,
		        category:3,
		       }

		       var details2 = {
		        image:"http://www.minipocketrockets.com/products/mini-dirt-bikes.jpg",
		        name:"The Dirt Master",
		        price:45,
		        description:"Peter sagan helmet brakes, stem garmin stoked hillclimb gear fork endurance through axle.",
		       	id:1,
		        category:1,
		       }

		        var details3 = {
		        image:"http://thundermountainbikepark.com/wp-content/uploads/2015/03/specialized-dh.jpg",
		        name:"Rock and Roll",
		        price:205,
		        description:"Peter sagan shimano stoked pedal strava, gear shuttup legs hillclimb trek IWBMATTKYT cross country downhill. UCI lycra alpe du huez through axle.",
		       	id:2,
		        category:2,
		       }

		        var details4 = {
		        image:"https://momentummag.com/wp-content/uploads/mp-import/5%20City%20Bikes%20Under%20500-StateShorelineDeluxe.jpg",
		        name:"Classic City",
		        price:350,
		        description:"Frame groupset pedal shimano UCI hillclimb, sufferfest sufferlandria trek. IWBMATTKYT colnago UCI peter sagan shimano lycra giant groupset.",
		       	id:3,
		        category:3,
		       }

		        var details5 = {
		        image:"http://cloudfront.ojcommerce.com/img/prods/large/r9000_mongoose_impasse_29_mountain_bike.jpg",
		        name:"Hit The Hills",	
		        price:110,
		        description:"Bmx garmin stem IWBMATTKYT alpe du huez specialized colnago stoked shimano rad sufferfest downhill peter sagan.",
		       	id:4,
		        category:2,
		       }

		        var details6 = {
		        image:"http://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/1390574/honda-crf-150-f-off-road-dirt-bike-2008.jpg?1297194933",
		        name:"Mad Max",
		        price:58,
		        description:"Aaron gwin sufferlandria peter sagan helmet colnago, rad tube power meter alpe du huez IWBMATTKYT downhill cross country.",
		       	id:5,
		        category:1,
		       }

		       var data = [details,details2,details3,details4,details5,details6];

		       return data;
			}

		 	function getWeather(city)
		 	{
		 		var call = $http({
		          method: 'GET',
		          url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7cf16558d759d14815306832bd7341e2&units=imperial`,
		          //how it is written without using template literal
		           // url: "http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=7cf16558d759d14815306832bd7341e2&units=imperial",
		        });
		 		
		        return call;
		 	}

		 	 return {
		 	 	getBikes:getBikes,
		 	 	getWeather:getWeather,

		 	 }
		 })	
})();