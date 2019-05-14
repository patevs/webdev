/**
 *  app/js/RoadDirectory/archiveRoad.js
 */

"use strict";

/**
 *  ArchiveRoadCtrl
 */
angular.module("trackrApp").controller("ArchiveRoadCtrl", function($scope, $http) {
	/* FIELDS */
	let vm = this;
	vm.scope = $scope;

	/* FUNCTIONS */

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
				//$log.log("Sucessfully deleted road id: " + roadID + "\n" + object);
				//updateRoadDirectory();
				//_clearRoadInfo();
			},
			function errorCall() {
				//$log.error("Error deleting road id: " + roadID);
			}
		);
	};

	/* METHOD CALLS */
	vm.scope.archiveRoad = function() {
		//
		_archiveRoad();
	};
});

/* EOF */
