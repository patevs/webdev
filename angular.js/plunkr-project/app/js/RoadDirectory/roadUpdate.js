
/**
 *  js/RoadDirectory/roadUpdate.js
 */

"use strict";

angular.module('trackrApp')
.controller('RoadUpdateCtrl', function($scope, $http, $uibModal, $log) {
    // view model
    var vm = this;
    vm.scope = $scope;

    // open modal
    vm.scope.open = function (index) {

        var modalInstance = $uibModal.open({
            templateUrl: 'partials/newRoadModal.html',
            controller: 'ModalInstanceCtrl',
        });

        modalInstance.result.then(function () {
            $log.info('Modal dismissed at: ' + new Date());
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });

    };

    // archive a given road
    vm.scope.archiveRoad = function() {
        $log.log("Archive road...");
    };

    // update a given road
    vm.scope.updateRoad = function(index) {
        $log.log("Updating road... index: " + index);
    };

    // add a new road
    vm.scope.newRoad = function(index) {
        $log.log("New road... index: " + index);
        vm.scope.open(index);
    };

    // update road api
    /*
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
    */

})
.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {
    // view modal
    var vm = this;
    vm.scope = $scope;

    vm.scope.ok = function () {
        $uibModalInstance.close();
    };

    vm.scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});


/* EOF */

