// Code goes here

//'use strict';

// import angular
//var angular = require('angular');

// Declare app level module 'infoApp'
var infoApp = angular.module('infoApp', []);

// Define the `PhoneListController` controller on the `infoApp` module
infoApp.controller('PhoneListController', function PhoneListController($scope) {
    $scope.phones = [
        {
            name: 'Nexus S',
            snippet: 'Fast just got faster with Nexus S.'
        }, 
        {
            name: 'Motorola XOOM™ with Wi-Fi',
            snippet: 'The Next, Next Generation tablet.'
        }, 
        {
            name: 'MOTOROLA XOOM™',
            snippet: 'The Next, Next Generation tablet.'
        }
    ];
});

// EOF

