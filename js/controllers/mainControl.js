(function() {
    'use strict';
    
    angular
    .module('shopSite')
    //function to create new item and push to list
    .controller('MainController', function bikeItem(API) {
       var vm = this;

       var data = API.getBikes();

       var random = Math.floor(Math.random() * data.length);

       vm.data = data[random];
       console.log(vm.data);

       })
})();