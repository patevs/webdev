
/**
 *  js/roadDirectory.js
 */

"use strict";

angular.module('trackrApp')
.controller('RoadDirCtrl', function($scope) {
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
    
    // create selectpicker element
    var selectRoadDir = angular.element('select');
    //angular.element('select').selectpicker();
    // add options to selectpicker
    // TODO: iterate over all roads and add each as an option
    //selectRoadDir.html('<option>Road 0</option>').selectpicker('refresh');
    
});


/* EOF */

