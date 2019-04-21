
/**
 *  js/roadDirectory.js
 */

"use strict";

angular.module('trackrApp')
.controller('TypeaheadCtrl', function($scope) {

    // view-modal
    var vm = this;
    vm.scope = $scope;

    var _selected;

    vm.scope.selected = undefined;
    vm.scope.states = 
        ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 
        'California', 'Colorado', 'Connecticut', 'Delaware', 
        'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 
        'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 
        'Maine', 'Maryland', 'Massachusetts', 'Michigan', 
        'Minnesota', 'Mississippi', 'Missouri', 'Montana', 
        'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 
        'New Mexico', 'New York', 'North Dakota', 'North Carolina', 
        'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 
        'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah',
        'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

    vm.scope.ngModelOptionsSelected = function(value) {
        if (arguments.length) {
            _selected = value;
        } else {
            return _selected;
        }
    };

    vm.scope.modelOptions = {
        debounce: {
            default: 500,
            blur: 250
        },
        getterSetter: true
    };

});