(function() {
    'use strict';
    
    angular
    .module('shopSite')
    .controller('DetailController', function bikeItem() {
       var vm = this;

        var details = {
        price:125,
        description:"Cycle ipsum dolor amet bmx brakes alpe du huez, pedal gear stoked power meter sufferlandria hillclimb specialized. Crank peter sagan IWBMATTKYT, groupset strava bmx shimano roadie tube frame alpe du huez.",
       }

       var details2 = {
        price:45,
        description:"Peter sagan helmet brakes, stem garmin stoked hillclimb gear fork endurance through axle.",
       }

        var details3 = {
        price:205,
        description:"Peter sagan shimano stoked pedal strava, gear shuttup legs hillclimb trek IWBMATTKYT cross country downhill. UCI lycra alpe du huez through axle.",
       }

        var details4 = {
        price:350,
        description:"Frame groupset pedal shimano UCI hillclimb, sufferfest sufferlandria trek. IWBMATTKYT colnago UCI peter sagan shimano lycra giant groupset.",
       }

        var details5 = {
        price:110,
        description:"Bmx garmin stem IWBMATTKYT alpe du huez specialized colnago stoked shimano rad sufferfest downhill peter sagan.",
       }

        var details6 = {
        price:58,
        description:"Aaron gwin sufferlandria peter sagan helmet colnago, rad tube power meter alpe du huez IWBMATTKYT downhill cross country.",
       }

       vm.data = [details,details2,details3,details4,details5,details6];
      
    })
})();