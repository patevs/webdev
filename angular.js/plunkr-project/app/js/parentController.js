
/**
 *  js/parentController.js
 */

"use strict";

angular.module('trackrApp')
.controller('parentController', 
['$scope', '$rootScope', '$uibModal', 'Auth', 'AUTH_EVENTS','USER_ROLES',
	function($scope, $rootScope, $modal, Auth, AUTH_EVENTS, USER_ROLES){
		// view-model
		var vm = this;
		vm.scope = $scope;
		vm.rootScope = $rootScope;
		// this is the parent controller for all controllers.
		// Manages auth login functions and each controller
		// inherits from this controller	
		vm.scope.modalShown = false;
		var showLoginDialog = function() {
			// ? workaround to allow login modal to display more than once ?
			if(!vm.scope.modalShown || true){
				vm.scope.modalShown = true;
				var modalInstance = $modal.open({
					templateUrl : 'partials/loginModal.html',
					controller : "LoginCtrl",
					backdrop : 'static',
				});

				modalInstance.result.then(function() {
					vm.scope.modalShown = false;
				});
			}
		};
		
		var setCurrentUser = function(){
			vm.scope.currentUser = vm.rootScope.currentUser;
		};
		
		var showNotAuthorized = function(){
			alert("Not Authorized");
		};
		
		vm.scope.currentUser = null;
		vm.scope.userRoles = USER_ROLES;
		vm.scope.isAuthorized = Auth.isAuthorized;

		//listen to events of unsuccessful logins, to run the login dialog
		vm.rootScope.$on(AUTH_EVENTS.notAuthorized, showNotAuthorized);
		vm.rootScope.$on(AUTH_EVENTS.notAuthenticated, showLoginDialog);
		vm.rootScope.$on(AUTH_EVENTS.sessionTimeout, showLoginDialog);
		vm.rootScope.$on(AUTH_EVENTS.logoutSuccess, showLoginDialog);
		vm.rootScope.$on(AUTH_EVENTS.loginSuccess, setCurrentUser);
		
	}
]);


/* EOF */

