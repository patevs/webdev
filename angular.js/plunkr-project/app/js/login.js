
/**
 *  js/login.js
 */

"use strict";

angular.module('trackrApp')
.controller('LoginCtrl', [ '$scope', '$uibModalInstance' , '$window', 'Auth', //, '$state'
	function($scope, $modalInstance, $window, Auth ) { //, $state

		// view-model
		var vm = this;
		vm.scope = $scope;

		vm.scope.credentials = {};
		vm.scope.loginForm = {};
		vm.scope.error = false;
	
		//when the form is submitted
		vm.scope.submit = function() {
			vm.scope.submitted = true;
			if (!vm.scope.loginForm.$invalid) {
				vm.scope.login($scope.credentials);
			} else {
				vm.scope.error = true;
				return;
			}
		};

		//Performs the login function, by sending a request to the server with the Auth service
		vm.scope.login = function(credentials) {
			vm.scope.error = false;
			Auth.login(credentials, function(user) {
				//success function
				$modalInstance.close();
				//$state.go('home');
			}, function(err) {
				//console.log("error");
				vm.scope.error = true;
			});
		};
	
		// if a session exists for current user (page was refreshed)
		// log him in again
		if ($window.sessionStorage.userInfo) {
			var credentials = angular.toJson($window.sessionStorage.userInfo);
			vm.scope.login(credentials);
		}

	}
]);


/* EOF */

