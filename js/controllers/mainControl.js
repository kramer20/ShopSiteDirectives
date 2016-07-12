(function() {
    'use strict';
    
    angular
    .module('shopSite')
    //function to create new item and push to list
    .controller('MainController', function bikeItem() {
       var vm = this;

       var bike = {
       	name: "The Dirt Master",
       	price:45,
        image: "http://www.minipocketrockets.com/products/mini-dirt-bikes.jpg"
       }

       vm.data = bike;
      
    })
})();