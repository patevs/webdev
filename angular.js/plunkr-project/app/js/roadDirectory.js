
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

    //Get list of roads via api request to server
    var target = 'https://track.sim.vuw.ac.nz/api/testuser/road_dir.json';
    var object = null;

    $http.get(target).then(
        function sucessCall(response) {
            object = response.data;
            vm.scope.feedback = "File read successfully: " + object.Roads[0].Location;
        },
        function errorCall() {
            vm.scope.feedback = "Error reading file.";
        }
    );

    // list of roads - Wellington Central
    // TODO: get road list from server
    vm.scope.roads = 
        [
            "Allenby Tce",
            "Athol Cres",
            "Ballance St",
            "Bolton St",
            "Bond St",
            "Boulcott St",
            "Bowen St",
            "Brandon St",
            "Cable Car Lane",
            "Chews Lane",
            "Church St",
            "Customhouse Qy",
            "Farmers Lane",
            "Featherston St",
            "Gilmer Tce",
            "Grey St",
            "Harris St",
            "Hunter St",
            "Jervois Qy",
            "Johnston St",
            "Lambton Qy",
            "Maginnity St",
            "Masons Lane",
            "Mercer St",
            "Mowbray St",
            "Panama St",
            "Plimmers Stps",
            "Post Office Sq",
            "Queens Wrf",
            "Salamanca Rd",
            "Stout St",
            "The Terrace",
            "Waring Taylor St",
            "Whitmore St",
            "Willeston St",
            "Woodward St"
        ];
    
    // get road directory select picker element
    var selectRoad = angular.element('#selectRoad');
    // initialize select picker element
    selectRoad.selectpicker();
    
    // get number of roads
    var numRoads = vm.scope.roads.length;
    // select picker options
    var selectRoadOptions = "";
    // iterate over all roads
    for(var i=0; i<numRoads; i++){
        var road = vm.scope.roads[i];
        selectRoadOptions += "<option>" + road + "</option>";
    }
    // add all options to select picker
    selectRoad.html(selectRoadOptions).selectpicker('refresh');

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
        selectedRoad = selectRoad.val();
        //$log.info("Selected: " + selectedRoad); // for testing
        var output = angular.element('#road-selection');
        output.html("Display infomation for: " + selectedRoad);
        // TODO: display road infomation
    };

});


/* EOF */

