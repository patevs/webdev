// Code goes here

//'use strict';

// import angular
//var angular = require('angular');

// Declare app level module 'infoApp'
var infoApp = angular.module('infoApp', ['ngMaterial', 'ngMessages']);

// Define the `InputController` controller on the `infoApp` module
infoApp.controller('InputController', function InputController($scope) {
    $scope.user = {
        name: '',
        email: '',
    };
})
.config(function($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('green')
        .dark();
});

// EOF

