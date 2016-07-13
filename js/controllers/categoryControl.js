(function() {
    'use strict';
    
    angular
    .module('shopSite')
    //function to create new item and push to list
    .controller('CategoryController', function bikeItem() {
       var vm = this;

		var category = {
       	name: "Dirt Bikes",
        category:1
       }

       var category2 = {
       	name:"Mountain Bikes",
        category:2
       }

       var category3 = {
       	name:"City Bikes",
        category:3
       }

       vm.data = [category,category2,category3];
      
    })
})();