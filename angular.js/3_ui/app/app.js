
/**
 *  app/app.js
 */

//"use strict";

//var angular = require('angular');
//import angular from 'angular';

angular.module('ngUI', [])
.controller('MainCtrl', function ($scope) {
    // view-model
    var vm = this;
    vm.scope = $scope;
    vm.scope.title = 'NG UI';   
});


/* EOF */

