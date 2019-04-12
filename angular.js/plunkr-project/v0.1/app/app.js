
/**
 *  app/app.js
 */

//"use strict";

//var angular = require('angular');
//import angular from 'angular';

// create trackrApp root angular module and MainCtrl controller 
angular.module('trackrApp', ['ui.bootstrap'])
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
})
.controller('MainCtrl', function ($scope) {
    $scope.title = 'TRACKR';
})
.controller('ModalCtrl', function ($uibModal, $log, $document) {
    var $ctrl = this;

    $ctrl.items = ['item1', 'item2', 'item3'];
    $ctrl.animationsEnabled = true;

    $ctrl.open = function (size, parentSelector) {
        var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.modal-login' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'partials/loginModal.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: '$ctrl',
            size: size,
            appendTo: parentElem,
            resolve: {
                items: function () {
                    return $ctrl.items;
                }
            }
        });
        modalInstance.result.then(function (selectedItem) {
            $ctrl.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

})
.controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
    var $ctrl = this;
    $ctrl.items = items;
    $ctrl.selected = {
        item: $ctrl.items[0]
    };
    $ctrl.ok = function () {
        $uibModalInstance.close($ctrl.selected.item);
    };
    $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});


/* EOF */

