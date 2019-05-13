/**
 *  js/RoadDirectory/roadDirectory.js
 */

"use strict";

angular
	.module("trackrApp")
	.controller("RoadDirCtrl", function($scope, $http, $uibModal, $log) {
		// view model
		var vm = this;
		vm.scope = $scope;

		// initialize road directory select picker element
		vm.scope.roadSelectPicker = angular.element("#selectRoad").selectpicker();

		/**
		 * Updates the local road diectory list using
		 * get request for road data from the server
		 */
		let updateRoadDirectory = function() {
			//Get list of roads via api request to server
			const ROAD_DIR_TARGET = "https://track.sim.vuw.ac.nz/api/evanspatr/road_dir.json";
			// response object to store data returned from server
			var object = null;
			// make get request for road directory list
			$http.get(ROAD_DIR_TARGET).then(
				function sucessCall(response) {
					// get json response data
					object = response.data;
					// json object containing all roads
					var allRoads = object.Roads;
					// update road directory with road data
					_updateRoads(allRoads);
				},
				function errorCall() {
					$log.error("Error reading road directory list from server");
					//vm.scope.feedback = "Error reading road directory list.";
				}
			);
		};
		/**
		 * Helper function used to update the road directory
		 * select picker element with the road data returned
		 * from the server
		 */
		let _updateRoads = function(roadData) {
			// json object containing all roads
			vm.scope.allRoads = roadData;
			// total number of roads
			vm.scope.numRoads = vm.scope.allRoads.length;
			$log.info("Successfully retrived road list\nNumber of roads: " + vm.scope.numRoads);
			// select picker options
			var selectRoadOptions = "";
			// iterate over all roads
			for (var i = 0; i < vm.scope.numRoads; i++) {
				var road = vm.scope.allRoads[i];
				$log.log(road);
				let roadID = road.ID;
				let roadLocation = road.Location;
				selectRoadOptions += "<option value=" + roadID + ">" + roadLocation + "</option>";
			}
			// add all options to select picker
			vm.scope.roadSelectPicker.html(selectRoadOptions).selectpicker("refresh");
		};

		// update the road directory
		vm.scope.allRoads = updateRoadDirectory();

		// road directory select picker on change event
		vm.scope.roadSelectPicker.on("changed.bs.select", function() {
			// update selected road
			vm.scope.selectedRoadID = vm.scope.roadSelectPicker.val();
			$log.log("Selected road id: " + vm.scope.selectedRoadID);

			// iterate over all roads
			for (let i = 0; i < vm.scope.numRoads; i++) {
				// !BUG cannot make delete request when ID is null
				// TODO: get road index & fix error when ID is null
				var road = vm.scope.allRoads[i];
				var currentID = road.ID;
				$log.log("current id: " + currentID);
				if (currentID === vm.scope.selectedRoadID || currentID === null) {
					vm.scope.selectedRoadIndex = i;
				}
			}
			$log.log("Selected road index: " + vm.scope.selectedRoadIndex);
			vm.scope.selectedRoad = vm.scope.allRoads[vm.scope.selectedRoadIndex].Location;
			$log.log("Selected road: " + vm.scope.selectedRoad);
			// show search button
			var btnSearchRoad = angular.element("#btn-search-road");
			if (vm.scope.selectedRoadID !== "") {
				btnSearchRoad.removeClass("ng-hide");
			}
		});

		// search road called on submit
		vm.scope.searchRoad = function() {
			// get road info panel element
			let roadInfoPanel = angular.element("#road-info");
			// show road info panel
			if (vm.scope.selectedRoadIndex !== "") {
				roadInfoPanel.removeClass("ng-hide");
			}
			// get road information
			var road = vm.scope.allRoads[vm.scope.selectedRoadIndex];
			let roadID = road.ID;
			let roadCode = road.Code;
			let roadType = road.Type;
			let roadSection = road.Section;
			let roadLocation = road.Location;
			let roadGPS = road.GPS;

			$log.info("Searched: " + roadLocation);

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
						id: roadID,
						code: roadCode,
						type: roadType,
						section: roadSection,
						location: roadLocation,
						gps: roadGPS
					}
				]
			});
		};

		// open create new road modal
		vm.scope.openNewRoadModal = function() {
			var modalInstance = $uibModal.open({
				templateUrl: "partials/newRoadModal.html",
				controller: "NewRoadModalInstanceCtrl",
				resolve: {
					newRoadIndex: function() {
						return vm.scope.numRoads + 1;
					}
				}
			});
			modalInstance.result.then(
				function() {
					$log.info("Modal dismissed at: " + new Date());
					//vm.scope.
					updateRoadDirectory();
				},
				function() {
					$log.info("Modal dismissed at: " + new Date());
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
		 * Archive the currently selected road
		 */
		vm.scope.archiveSelectedRoad = function() {
			// delete road target url
			const DELETE_ROAD_TARGET =
				"https://track.sim.vuw.ac.nz/api/evanspatr/delete.road." +
				vm.scope.selectedRoadID +
				".json";
			$log.info("Archiving selected road... road id: " + vm.scope.selectedRoadID);
			// road delete request
			$http.delete(DELETE_ROAD_TARGET).then(
				function sucessCall(response) {
					var object = response.data;
					$log.log("object data: " + object);
					updateRoadDirectory();
				},
				function errorCall() {
					$log.error("Error deleting road");
					//vm.scope.feedback = "Error deleting road.";
				}
			);
		};

		/**
		 * Update the currently selected road
		 * TODO: implement this function
		 */
		vm.scope.updateSelectedRoad = function() {
			$log.info("Updating selected road...");
		};

		/**
		 * Create new road opens a create new road
		 * modal element asking user for road data.
		 * A new road will always be created with a
		 * unique id.
		 */
		vm.scope.createNewRoad = function() {
			$log.info("Opening creating new road modal...");
			vm.scope.openNewRoadModal();
			// TODO: wait some time before update
			vm.scope.allRoads = updateRoadDirectory();
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
		//var object = null;

		// send new road data to server
		vm.scope.addNewRoad = function(data) {
			$http.post(UPDATE_ROAD_TARGET, data).then(
				function sucessCall(response) {
					var object = response.data;
					$log.log("object data: " + object);
				},
				function errorCall() {
					//vm.scope.feedback = "Error updating road";
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
