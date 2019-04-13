
/**
 *  script.js
 *  angularjs root module
 */

"use strict";

//var angular = require('angular');
//import angular from 'angular';

// create trackrApp root angular module
angular.module('trackrApp', ['ui.bootstrap'])
.controller('MainCtrl', function ($scope) {
    // view-model
    var vm = this;
    vm.scope = $scope;
    vm.scope.title = 'TRACKR';
})
.constant('USER_ROLES', {
    all : '*',
    contractor : 'contractor',
    inspector : 'inspector',
    manager : 'manager'
})
.constant('AUTH_EVENTS', {
    loginSuccess : 'auth-login-success',
    loginFailed : 'auth-login-failed',
    logoutSuccess : 'auth-logout-success',
    notAuthenticated : 'auth-not-authenticated',
    notAuthorized : 'auth-not-authorized'
})
/* Adding the auth interceptor here, to check every $http request*/
.config(function ($httpProvider) {
    $httpProvider.interceptors.push([
        '$injector',
        function ($injector) {
            return $injector.get('AuthInterceptor');
        }
    ]);
});


/* EOF */

