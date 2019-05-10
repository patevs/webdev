
/**
 *  js/roadDirectory.js
 */

"use strict";

angular.module('trackrApp')
.controller('RoadDirCtrl', function($scope, $http, $log) {
    // view model
    var vm = this;
    vm.scope = $scope;

    // currently selected road
    //vm.scope.selected = undefined;
    
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
            var numRoads = vm.scope.allRoads.length;

            $log.info("Successfully retrived road list\nNumber of roads: " + numRoads);

            // select picker options
            var selectRoadOptions = "";
            // iterate over all roads
            for(var i=0; i<numRoads; i++){
                var road = vm.scope.allRoads[i];
                let roadID = road.ID;
                let roadLocation = road.Location;
                //$log.info("Road ID: " + roadID + " location: " + roadLocation);
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
    //$log.info("Selected road: " + selectedRoad);

    // road directory select picker on change event
    selectRoad.on('changed.bs.select', function(){
        //$log.log(selectRoad.val()); // for testing
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

