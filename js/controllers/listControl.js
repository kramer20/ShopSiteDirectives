(function() {
    'use strict';
    
    angular
    .module('shopSite')
    //function to create new item and push to list
    .controller('ListController', function bikeItem(API) {
       
       var vm = this;

        var data = API.getBikes();

        vm.data = data;

      
    })
})();