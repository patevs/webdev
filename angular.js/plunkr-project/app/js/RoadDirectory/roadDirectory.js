
/**
 *  js/RoadDirectory/roadDirectory.js
 */

"use strict";

angular.module('trackrApp')
.controller('RoadDirCtrl', function($scope, $http, $log) {
    // view model
    var vm = this;
    vm.scope = $scope;

    // currently selected road and index
    vm.scope.selected = undefined;
    vm.scope.selectedIndex = -1;
    // total number of roads
    vm.scope.numRoads = -1;
    
    // list of all roads
    vm.scope.allRoads = undefined;

    // get road directory select picker element
    var selectRoad = angular.element('#selectRoad');
    // initialize select picker element
    selectRoad.selectpicker();

    //Get list of roads via api request to server
    var target = 'https://track.sim.vuw.ac.nz/api/evanspatr/road_dir.json';
    var object = null;

    $http.get(target).then(
        function sucessCall(response) {
            object = response.data;

            vm.scope.allRoads = object.Roads;
            //var numRoads = vm.scope.allRoads.length;
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
            selectRoad.html(selectRoadOptions).selectpicker('refresh');

        },
        function errorCall() {
            vm.scope.feedback = "Error reading road directory list.";
        }
    );

    // currently selected road
    var selectedRoad = selectRoad.val();

    // road directory select picker on change event
    selectRoad.on('changed.bs.select', function(){
        // update selected road
        selectedRoad = selectRoad.val();
        // show search button
        var btnSearchRoad = angular.element('#btn-search-road');
        if(selectedRoad !== '') {
            btnSearchRoad.removeClass('ng-hide');
        }
    });

    // search road called on submit
    vm.scope.searchRoad = function(){
        // get road info panel element
        let roadInfoPanel = angular.element('#road-info');
        // get selected road index
        let roadIndex = selectRoad.val() - 1;
        if(roadIndex !== ''){
            roadInfoPanel.removeClass('ng-hide');
        }
        // get road information
        var road = vm.scope.allRoads[roadIndex];
        let roadID = road.ID;
        let roadCode = road.Code;
        let roadType = road.Type;
        let roadSection = road.Section;
        let roadLocation = road.Location;
        let roadGPS = road.GPS;

        $log.info("Selected: " + roadLocation);

        // update currently selected road location and index
        vm.scope.selected = roadLocation;
        vm.scope.selectedIndex = roadIndex;
        
        // get road info data element
        let roadInfoTable = angular.element('#road-info-table');
        
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

});


/* EOF */

