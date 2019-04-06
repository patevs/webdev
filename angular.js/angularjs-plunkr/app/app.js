
/**
 *  app/app.js
 */

//"use strict";

//var angular = require('angular');
//import angular from 'angular';

// create trackrApp root angular module and MainCtrl controller 
angular.module('trackrApp', ['ui.bootstrap'])
.controller('MainCtrl', function ($scope) {
    $scope.title = 'TRACKR';
})
.controller('ModalCtrl', function ($uibModal, $log, $document) {
    var $ctrl = this;

    $ctrl.items = ['item1', 'item2', 'item3'];
    $ctrl.animationsEnabled = true;

    $ctrl.open = function (size, parentSelector) {
        var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.modal-demo' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'myModalContent.html',
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

