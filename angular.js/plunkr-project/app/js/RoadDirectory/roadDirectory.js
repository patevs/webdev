
/**
 *  js/RoadDirectory/roadDirectory.js
 */

"use strict";

angular.module('trackrApp')
.controller('RoadDirCtrl', function($scope, $http, $uibModal, $log) {
    // view model
    var vm = this;
    vm.scope = $scope;
    
    // json object containing all roads
    vm.scope.allRoads = undefined;
    // total number of roads
    vm.scope.numRoads = -1;

    // get road directory select picker element
    vm.scope.roadSelectPicker = angular.element('#selectRoad');
    // initialize select picker element
    //vm.scope.roadSelectPicker.selectpicker();

    //Get list of roads via api request to server
    const ROAD_DIR_TARGET = 'https://track.sim.vuw.ac.nz/api/evanspatr/road_dir.json';
    var object = null;

    // update road directory list
    vm.scope.updateRoadDirectory = function(){
        $log.info("Updating road directory...");
        // road directory list get request
        $http.get(ROAD_DIR_TARGET).then(
            function sucessCall(response) {
                object = response.data;
                vm.scope.allRoads = object.Roads;
                vm.scope.numRoads = vm.scope.allRoads.length;
                $log.info("Successfully retrived road list\nNumber of roads: " + vm.scope.numRoads);
                // select picker options
                var selectRoadOptions = "";
                // iterate over all roads
                for(var i=0; i<vm.scope.numRoads; i++){
                    var road = vm.scope.allRoads[i];
                    let roadID = road.ID;
                    let roadLocation = road.Location;
                    selectRoadOptions += "<option value=" + roadID + ">" + roadLocation + "</option>";
                }
                // add all options to select picker
                vm.scope.roadSelectPicker.html(selectRoadOptions).selectpicker('refresh');
            },
            function errorCall() {
                vm.scope.feedback = "Error reading road directory list.";
            }
        );
    };

    // update the road directory
    vm.scope.updateRoadDirectory();

    // road directory select picker on change event
    vm.scope.roadSelectPicker.on('changed.bs.select', function(){
        // update selected road
        vm.scope.selectedRoadID = vm.scope.roadSelectPicker.val();
        $log.log("Selected road id: " + vm.scope.selectedRoadID);
        vm.scope.selectedRoadIndex = vm.scope.selectedRoadID - 1;
        $log.log("Selected road index: " + vm.scope.selectedRoadIndex);
        vm.scope.selectedRoad = vm.scope.allRoads[vm.scope.selectedRoadIndex].Location;
        $log.log("Selected road: " + vm.scope.selectedRoad);
        // show search button
        var btnSearchRoad = angular.element('#btn-search-road');
        if(vm.scope.selectedRoadID !== '') {
            btnSearchRoad.removeClass('ng-hide');
        }
    });

    // search road called on submit
    vm.scope.searchRoad = function(){
        // get road info panel element
        let roadInfoPanel = angular.element('#road-info');
        // show road info panel
        if(vm.scope.selectedRoadIndex !== ''){
            roadInfoPanel.removeClass('ng-hide');
        }
        // get road information
        var road = vm.scope.allRoads[vm.scope.selectedRoadIndex];
        let roadID = road.ID;
        let roadCode = road.Code;
        let roadType = road.Type;
        let roadSection = road.Section;
        let roadLocation = road.Location;
        let roadGPS = road.GPS;

        $log.info("Searched: " + roadLocation);
        
        // get road info data element
        let roadInfoTable = angular.element('#road-info-table');

        // destroy old table
        roadInfoTable.bootstrapTable('destroy');
        
        // create bootstrap table
        roadInfoTable.bootstrapTable({
            columns: [{
                field: 'id',
                title: 'ID'
            }, {
                field: 'code',
                title: 'Code'
            }, {
                field: 'type',
                title: 'Type'
            }, {
                field: 'section',
                title: 'Section'
            }, {
                field: 'location',
                title: 'Location'
            }, {
                field: 'gps',
                title: 'GPS'
            }],
            data: [{
                id: roadID,
                code: roadCode,
                type: roadType,
                section: roadSection,
                location: roadLocation,
                gps: roadGPS
            }]
        });
    };

    // open create new road modal
    vm.scope.open = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'partials/newRoadModal.html',
            controller: 'NewRoadModalInstanceCtrl',
            resolve: {
                newRoadIndex: function () {
                    return vm.scope.numRoads + 1;
                }
            }
        });
        modalInstance.result.then(function () {
            $log.info('Modal dismissed at: ' + new Date());
            vm.scope.updateRoadDirectory();
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

    // create new road
    vm.scope.createNewRoad = function(){
        $log.info("Opening creating new road modal...");
        vm.scope.open();
    };

    // archive selected road
    vm.scope.archiveSelectedRoad = function(){
        // delete road target url
        const DELETE_ROAD_TARGET = "https://track.sim.vuw.ac.nz/api/evanspatr/delete.road." + vm.scope.selectedRoadID + ".json";
        $log.info("Archiving selected road... road id: " + vm.scope.selectedRoadID);
        // road delete request
        $http.delete(DELETE_ROAD_TARGET).then(
            function sucessCall(response) {
                object = response.data;
                $log.log("object data: " + object);
                vm.scope.updateRoadDirectory();
            },
            function errorCall() {
                vm.scope.feedback = "Error deleting road.";
            }
        );
    };

    // update selected road
    vm.scope.updateSelectedRoad = function(){
        $log.info("Updating selected road...");
    };

})
.controller('NewRoadModalInstanceCtrl', function ($scope, $http, $uibModalInstance, newRoadIndex, $log) {
    // view modal
    var vm = this;
    vm.scope = $scope;

    vm.scope.data = {};
    vm.scope.newRoadForm = {};
    vm.scope.error = false;
    
    // index of new road
    vm.scope.newIndex = newRoadIndex;

    // update road via api post request to server
    const UPDATE_ROAD_TARGET = 'https://track.sim.vuw.ac.nz/api/evanspatr/update.road.json';
    var object = null;

    // send new road data to server
    vm.scope.addNewRoad = function(data){
        $http.post(UPDATE_ROAD_TARGET, data).then(
            function sucessCall(response) {
                object = response.data;
                $log.log("object data: " + object);
            },
            function errorCall() {
                vm.scope.feedback = "Error updating road";
            }
        );
    };

    //when the form is submitted
    vm.scope.submit = function() {
        vm.scope.submitted = true;
        if (!vm.scope.newRoadForm.$invalid) {
            //vm.scope.login($scope.credentials);
            vm.scope.ok();
        } else {
            vm.scope.error = true;
            return;
        }
    };

    // valid form submission
    vm.scope.ok = function () {
        vm.scope.error = false;
        // get submitted road data
        let roadID = vm.scope.newIndex;
        let roadCode = vm.scope.data.code;
        let roadType = vm.scope.data.type;
        let roadLocation = vm.scope.data.location;
        let roadData = {
            "ID" : roadID,
            "Code" : roadCode,
            "Type" : roadType,
            "Section" : roadLocation,
            "Location" : roadLocation,
            "GPS" : roadLocation
        };
        $log.info("id: " + roadID + " code: " + roadCode + " type: " + roadType + " location: " + roadLocation);
        $uibModalInstance.close();
        vm.scope.addNewRoad(roadData);
    };

    vm.scope.cancel = function () {
        vm.scope.error = true;
        $uibModalInstance.dismiss('cancel');
    };
});


/* EOF */

