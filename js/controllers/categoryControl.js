(function() {
    'use strict';
    
    angular
    .module('shopSite')
    //function to create new item and push to list
    .controller('CategoryController', function bikeItem() {
       var vm = this;

		var category = {
       	name: "Dirt Bikes",
       }

       var category2 = {
       	name:"Mountain Bikes",
       }

       var category3 = {
       	name:"City Bikes"
       }

       vm.data = [category,category2,category3];
      
    })
})();