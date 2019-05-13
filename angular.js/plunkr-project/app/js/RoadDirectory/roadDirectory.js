/**
 *  js/RoadDirectory/roadDirectory.js
 */

"use strict";

angular
	.module("trackrApp")
	.controller("RoadDirCtrl", function($scope, $http, $uibModal, $log, $timeout) {
		// view model
		var vm = this;
		vm.scope = $scope;

		// initialize road directory select picker element
		let _roadSelectPicker = angular.element("#selectRoad").selectpicker();

		/**
		 * Helper function used to update the road directory
		 * select picker element with the road data returned
		 * from the server
		 */
		let _updateRoads = function(roadData) {
			// json object containing all roads
			vm.scope.allRoads = roadData;
			//let numRoads = vm.scope.allRoads.length;
			$log.info("Successfully retrived road list from server: " + roadData.length);
			// select picker options
			var selectRoadOptions = "";
			// iterate over all roads
			for (var i = 0; i < roadData.length; i++) {
				var road = roadData[i];
				let roadID = road.ID;
				if (road !== null && roadID !== null) {
					selectRoadOptions += "<option value=" + roadID + ">" + road.Location + "</option>";
				} else {
					$log.warn("Skipping null road id");
				}
			}
			// add all options to select picker
			_roadSelectPicker.html(selectRoadOptions).selectpicker("refresh");
		};

		/**
		 * Updates the local road directory list using
		 * HTTP GET request for road data from the server
		 */
		let updateRoadDirectory = function() {
			//Get list of roads via api request to server
			const ROAD_DIR_TARGET = "https://track.sim.vuw.ac.nz/api/evanspatr/road_dir.json";
			// make get request for road directory list
			$http.get(ROAD_DIR_TARGET).then(
				function sucessCall(response) {
					// get json response data
					var roadDirData = response.data;
					// json object containing all roads
					// update road directory with road data
					_updateRoads(roadDirData.Roads);
				},
				function errorCall() {
					$log.error("Error reading road directory list from server");
				}
			);
		};

		// update the local road directory
		updateRoadDirectory();

		// road directory select picker on change event
		// ! TODO: fix this method to not show roads with error values
		_roadSelectPicker.on("changed.bs.select", function() {
			// update selected road
			let selectedRoadID = _roadSelectPicker.val();
			$log.log("Selected road value: " + selectedRoadID);
			// show search button
			var btnSearchRoad = angular.element("#btn-search-road");
			if (selectedRoadID !== "") {
				btnSearchRoad.removeClass("ng-hide");
			}
		});

		// search road called on submit
		vm.scope.searchRoad = function() {
			// get road info panel element
			let roadInfoPanel = angular.element("#road-info");
			let selectedRoadID = _roadSelectPicker.val();
			// show road info panel
			if (selectedRoadID !== "") {
				roadInfoPanel.removeClass("ng-hide");
			}
			// get road information
			let road;
			for (let i = 0; i < vm.scope.allRoads.length; i++) {
				let currentRoad = vm.scope.allRoads[i];
				let roadID = currentRoad.ID;
				if (roadID === selectedRoadID) {
					road = currentRoad;
				}
			}

			// get road info data element
			let roadInfoTable = angular.element("#road-info-table");

			// destroy old table
			roadInfoTable.bootstrapTable("destroy");

			// create bootstrap table
			roadInfoTable.bootstrapTable({
				columns: [
					{
						field: "id",
						title: "ID"
					},
					{
						field: "code",
						title: "Code"
					},
					{
						field: "type",
						title: "Type"
					},
					{
						field: "section",
						title: "Section"
					},
					{
						field: "location",
						title: "Location"
					},
					{
						field: "gps",
						title: "GPS"
					}
				],
				data: [
					{
						id: road.ID,
						code: road.Code,
						type: road.Type,
						section: road.Section,
						location: road.Location,
						gps: road.GPS
					}
				]
			});
		};

		// open create new road modal
		// TODO: remove this and generically use update road function
		let _openNewRoadModal = function() {
			var modalInstance = $uibModal.open({
				templateUrl: "partials/newRoadModal.html",
				controller: "NewRoadModalInstanceCtrl",
				resolve: {
					newRoadIndex: function() {
						return vm.scope.allRoads.length;
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
				}
			);
		};

		/*******************
		 * MANAGER OPTIONS *
		 * - archive       *
		 * - update        *
		 * - create new    *
		 *******************/

		/**
		 * helper function used to send a delete request
		 * 	to server to archive a road with the given id.
		 * @param { road id to archive } roadID
		 */
		let _archiveRoad = function(roadID) {
			// delete road target url
			let target = "https://track.sim.vuw.ac.nz/api/evanspatr/delete.road." + roadID + ".json";
			// road delete request
			$http.delete(target).then(
				function sucessCall(response) {
					var object = response.data;
					$log.log("Sucessfully deleted road id: " + roadID + "\n" + object);
					updateRoadDirectory();
				},
				function errorCall() {
					$log.error("Error deleting road id: " + roadID);
				}
			);
		};

		/**
		 *
		 */
		let _openUpdateRoadModal = function(oldRoadData) {
			// get currently selected road
			var selectedRoad = oldRoadData;
			$log.log("updating road: " + selectedRoad.Location);
			var modalInstance = $uibModal.open({
				templateUrl: "partials/updateRoadModal.html",
				controller: "UpdateRoadModalInstanceCtrl",
				resolve: {
					selectedRoad: function() {
						return selectedRoad;
					}
				}
			});
			modalInstance.result.then(
				function() {
					$log.info("Modal dismissed at: " + new Date());
					updateRoadDirectory();
				},
				function() {
					$log.info("Modal dismissed at: " + new Date());
				}
			);
		};

		/**
		 * Archive the currently selected road
		 */
		vm.scope.archiveSelectedRoad = function() {
			//var roadID = vm.scope.selectedRoadID;
			let selectedRoadID = _roadSelectPicker.val();
			_archiveRoad(selectedRoadID);
		};

		/**
		 * Update the currently selected road
		 * TODO: implement this function
		 */
		vm.scope.updateSelectedRoad = function() {
			$log.info("Updating selected road...");
			_openUpdateRoadModal();
		};

		/**
		 * Create new road opens a create new road
		 * modal element asking user for road data.
		 * A new road will always be created with a
		 * unique id.
		 */
		vm.scope.createNewRoad = function() {
			$log.info("Opening creating new road modal...");
			_openNewRoadModal();
			// TODO: wait some time before update
			//$timeout(updateRoadDirectory(), 3000);
		};
	})
	.controller("UpdateRoadModalInstanceCtrl", function(
		$scope,
		$http,
		$uibModalInstance,
		$log,
		selectedRoad
	) {
		// view modal
		var vm = this;
		vm.scope = $scope;

		// new road data
		vm.scope.data = {};
		vm.scope.updateRoadForm = {};
		vm.scope.error = false;

		// old road data
		vm.scope.road = selectedRoad;

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
			if (!vm.scope.updateRoadForm.$invalid) {
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
			let roadData = {
				ID: vm.scope.road.ID,
				Code: vm.scope.data.code,
				Type: vm.scope.data.type,
				Section: vm.scope.data.section,
				Location: vm.scope.data.location,
				GPS: vm.scope.data.gps
			};
			vm.scope.addNewRoad(roadData);
			$uibModalInstance.close();
		};

		vm.scope.cancel = function() {
			vm.scope.error = true;
			$uibModalInstance.dismiss("cancel");
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
