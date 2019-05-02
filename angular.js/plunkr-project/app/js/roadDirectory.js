
/**
 *  js/roadDirectory.js
 */

"use strict";

angular.module('trackrApp')
.controller('RoadDirCtrl', function($scope, $log) {
    // view model
    var vm = this;
    vm.scope = $scope;

    // currently selected road
    vm.scope.selected = undefined;

    // list of roads - Wellington Central
    // TODO: convert this to json object
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

    // search road called on submit
    vm.scope.searchRoad = function(){
        var selected = selectRoad.val();
        $log.info("Selected: " + selected);
        // TODO: display road infomation
    };

});


/* EOF */

