(function() {
    'use strict';
    
    angular
    .module('shopSite')
    //function to create new item and push to list
    .controller('ListController', function bikeItem() {
       
       var vm = this;

       var itemList = {
       	image:"http://cdn.grindtv.com/wp-content/uploads/2013/10/citybike_purecity.jpg",
        name:"Slow Ride",
       }

       var itemList2 = {
        image:"http://www.minipocketrockets.com/products/mini-dirt-bikes.jpg",
        name:"The Dirt Master",
       }

        var itemList3 = {
        image:"http://thundermountainbikepark.com/wp-content/uploads/2015/03/specialized-dh.jpg",
        name:"Rock and Roll",
       }

        var itemList4 = {
        image:"https://momentummag.com/wp-content/uploads/mp-import/5%20City%20Bikes%20Under%20500-StateShorelineDeluxe.jpg",
        name:"Classic City",
       }

        var itemList5 = {
        image:"http://cloudfront.ojcommerce.com/img/prods/large/r9000_mongoose_impasse_29_mountain_bike.jpg",
        name:"Hit The Hills",
       }

        var itemList6 = {
        image:"http://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/1390574/honda-crf-150-f-off-road-dirt-bike-2008.jpg?1297194933",
        name:"Mad Max",
       }

       vm.data = [itemList,itemList2,itemList3,itemList4,itemList5,itemList6];
      
    })
})();