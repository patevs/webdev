
/**
 *  app/app.js
 */

"use strict";

//var angular = require('angular');
//import angular from 'angular';

angular.module('infoApp', ['mgcrea.ngStrap'])
.controller('MainCtrl', function ($scope) {
    // view-model
    var vm = this;
    vm.scope = $scope;
    vm.scope.title = 'INFO PROJECT';   
})
.controller('ModalCtrl', function($scope) {
    var vm = this;
    vm.scope = $scope;
    vm.scope.modal = {
        "title" : "Title",
        "content" : "Hello Modal <br /> This is a multiline message!"
    };
});


/* EOF */

