(function(){
	'use strict';

	angular
	.module('shopSite')
	.controller('CategoryListController', function(API,$stateParams){
		var vm = this;

		var categoryId = $stateParams.catid;

		var data = API.getBikes();

		var array = [];

		data.forEach(function(bike){
			if(bike.category == categoryId)
			{
				array.push(bike);
			}
		});

		console.log(array);

		vm.data = array;
	})
})();
