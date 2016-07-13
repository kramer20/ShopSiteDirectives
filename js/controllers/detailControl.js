(function() {
    'use strict';
    
    angular
    .module('shopSite')
    .controller('DetailController', function(API,$stateParams) {
       var vm = this;

        var data = API.getBikes();
        
        vm.item = data[$stateParams.item];
      
    });
})();