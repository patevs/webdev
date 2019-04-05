

// Configure the main application module.
var loginApp = angular.module('loginApp', ['ui.bootstrap']) //'ui.router', 
/*Constants regarding user login defined here*/
.constant('USER_ROLES', {
	all : '*',
	contractor : 'contractor',
	inspector : 'inspector',
	manager : 'manager'
}).constant('AUTH_EVENTS', {
	loginSuccess : 'auth-login-success',
	loginFailed : 'auth-login-failed',
	logoutSuccess : 'auth-logout-success',
	sessionTimeout : 'auth-session-timeout',
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
})
