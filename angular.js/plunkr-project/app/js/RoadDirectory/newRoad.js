/**
 *  app/js/RoadDirectory/newRoad.js
 *  create a new road controller
 */

"use strict";

/**
 *  UpdateRoadCtrl used to update/add/archive road data
 *  using http POST request to server
 */
angular
	.module("trackrApp")
	.controller("UpdateRoadCtrl", function($scope, $http, $uibModal, $log) {
		/* FIELDS */
		let vm = this;
		vm.scope = $scope;

		/* FUNCTIONS */

		// open create new road modal
		let _openNewRoadModal = function() {
			var modalInstance = $uibModal.open({
				templateUrl: "partials/newRoadModal.html",
				controller: "NewRoadModalInstanceCtrl",
				resolve: {
					newRoadIndex: function() {
						return 0;
					}
				}
			});
			modalInstance.result.then(
				function() {
					$log.log("Modal dismissed at: " + new Date());
					//updateRoadDirectory();
				},
				function() {
					$log.warn("Modal dismissed at: " + new Date());
					//updateRoadDirectory();
				}
			);
		};

		/* METHOD CALLS */
		/**
		 * Create new road opens a create new road
		 * modal element asking user for road data.
		 * A new road will always be created with a
		 * unique id.
		 */
		vm.scope.createNewRoad = function() {
			$log.info("Opening creating new road modal...");
			_openNewRoadModal();
		};
	})
	.controller("NewRoadModalInstanceCtrl", function(
		$scope,
		$http,
		$uibModalInstance,
		$log,
		newRoadIndex
	) {
		// view modal
		var vm = this;
		vm.scope = $scope;

		// new road data
		vm.scope.data = {};
		vm.scope.newRoadForm = {};
		vm.scope.error = false;

		// index of new road
		vm.scope.newIndex = newRoadIndex;

		// update road via api post request to server
		const UPDATE_ROAD_TARGET = "https://track.sim.vuw.ac.nz/api/evanspatr/update.road.json";

		// send new road data to server
		vm.scope.addNewRoad = function(data) {
			$http.post(UPDATE_ROAD_TARGET, data).then(
				function sucessCall(response) {
					var object = response.data;
					$log.log("object data: " + object);
				},
				function errorCall() {
					$log.error("Error updating road");
				}
			);
		};

		//when the form is submitted
		vm.scope.submit = function() {
			vm.scope.submitted = true;
			if (!vm.scope.newRoadForm.$invalid) {
				vm.scope.ok();
			} else {
				vm.scope.error = true;
				return;
			}
		};

		// valid form submission
		vm.scope.ok = function() {
			vm.scope.error = false;
			// get submitted road data
			let roadID = vm.scope.newIndex;
			let roadCode = vm.scope.data.code;
			let roadType = vm.scope.data.type;
			let roadSection = vm.scope.data.section;
			let roadLocation = vm.scope.data.location;
			let roadGPS = vm.scope.data.gps;
			let roadData = {
				ID: roadID,
				Code: roadCode,
				Type: roadType,
				Section: roadSection,
				Location: roadLocation,
				GPS: roadGPS
			};
			$log.info(
				"id: " + roadID + " code: " + roadCode + " type: " + roadType + " location: " + roadLocation
			);
			vm.scope.addNewRoad(roadData);
			$uibModalInstance.close();
		};

		vm.scope.cancel = function() {
			vm.scope.error = true;
			$uibModalInstance.dismiss("cancel");
		};
	});

/* EOF */
