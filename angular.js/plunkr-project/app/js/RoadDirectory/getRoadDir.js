/**
 *  app/js/RoadDirectory/getRoadDir.js
 *  angular.js controller used to get road directory data from server
 */

"use strict";

/**
 * GETroadDirCtrl controller used to make get request to server
 *  and display retrieved road directory to the user. Road data sanity and
 *  validity checks are done within this controller.
 */
angular.module("trackrApp").controller("GETroadDirCtrl", function($scope, $http, $log) {
	/* FIELDS */
	// view model
	let vm = this;
	vm.scope = $scope;

	// initialize road directory select picker element
	let _roadSelectPicker = angular.element("#selectRoad"); //.selectpicker();
	// road directory error alert element
	let _roadSelectError = angular.element("#selectRoadError");
	// update road directory button element
	let _btnUpdateRoads = angular.element("#btn-update-roads");

	/* FUNCTIONS */

	/**
	 * Helper function used to update the road directory
	 * select picker element with the road data returned
	 * from the server
	 * @param {roadData json object retrieved from server} roadData
	 */
	let _updateRoadsPicker = function(roadData) {
		// count the number of valid roads
		let count = 0;
		// select picker options
		let selectRoadOptions = "";
		// iterate over all roads
		for (let i = 0; i < roadData.length; i++) {
			// check each road
			let road = roadData[i];
			let roadID = road.ID;
			// check road & roadID are not null values
			if (road !== null && roadID !== null) {
				// add road as option
				selectRoadOptions += "<option value=" + roadID + ">" + road.Location + "</option>";
				// increment count
				count++;
			} else {
				// skip when road or roadID is null
				//$log.warn("Skipping null road id");
			}
		}
		// add all options to select picker
		_roadSelectPicker.html(selectRoadOptions).selectpicker("refresh");
		// finally return count
		return count;
	};

	/**
	 * Updates the local road directory list using
	 * HTTP GET request for road data from the server
	 */
	let updateRoadDirectory = function() {
		$log.info("Requesting road directory data from server...");
		//Get list of roads via api request to server
		const ROAD_DIR_TARGET = "https://track.sim.vuw.ac.nz/api/evanspatr/road_dir.json";
		// make get request for road directory list
		$http.get(ROAD_DIR_TARGET).then(
			function sucessCall(response) {
				// get json response data
				let roadDirData = response.data;
				// update road directory with road data
				let numValidRoads = _updateRoadsPicker(roadDirData.Roads);
				$log.log(
					"Successfully retrieved road directory from server!" +
						"\n Number of valid roads: " +
						numValidRoads
				);
				// display warning if no valid roads were retrieved from server
				if (numValidRoads === 0) {
					_roadSelectPicker.addClass("ng-hide").selectpicker("refresh");
					_roadSelectError.removeClass("ng-hide");
				} else {
					_roadSelectPicker.removeClass("ng-hide").selectpicker("refresh");
					_btnUpdateRoads.addClass("ng-hide");
				}
			},
			function errorCall() {
				$log.error("Error reading road directory list from server");
			}
		);
	};

	/* METHOD CALLS */

	// expose this method to local scope
	vm.scope.updateRoadDir = function() {
		updateRoadDirectory();
	};
	// update the local road directory
	vm.scope.updateRoadDir();
});

/* EOF */
