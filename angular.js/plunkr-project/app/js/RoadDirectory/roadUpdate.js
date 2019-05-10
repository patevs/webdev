
/**
 *  js/RoadDirectory/roadUpdate.js
 */

"use strict";

angular.module('trackrApp')
.controller('RoadUpdateCtrl', function($scope, $http, $log) {
    // view model
    var vm = this;
    vm.scope = $scope;

    // update road api
    var target = 'https://track.sim.vuw.ac.nz/api/evanspatr/update.road.json';
    var object = null;

    let data = {
        "ID" : "1",
        "Code" : "SH1 South",
        "Type" : "State Highway",
        "Section" : "Kapiti",
        "Location" : "Kapiti Interchange",
        "GPS" : "Latitude 123, Longitude 456"
    }

    $http.post(target, data).then(
        function sucessCall(response) {
            object = response.data;
            $log.log(object);
        },
        function errorCall() {
            vm.scope.feedback = "Error updating road";
        }
    );

});


/* EOF */

