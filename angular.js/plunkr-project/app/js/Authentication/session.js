
/**
 *  js/session.js
 */

"use strict";

/*
 * In this service the user data is defined for the current session. Within
 * angular current session is until the page is refreshed. When the page is
 * refreshed the user is reinitialized through $window.sessionStorage at the
 * login.js file.
 */
/*
angular.module('trackrApp')
.service('Session', function($rootScope, USER_ROLES) {

	this.create = function(user) {
		this.user = user;
		this.userRole = user.userRole;
	};
	
	this.destroy = function() {
		this.user = null;
		this.userRole = null;
	};
	
	return this;
	
});
*/

angular.module('trackrApp')
.factory('Session', function($rootScope, USER_ROLES) {
	this.create = function(user) {
		this.user = user;
		this.userRole = user.userRole;
	};
	this.destroy = function() {
		this.user = null;
		this.userRole = null;
	}
	return this;
});


/* EOF */

