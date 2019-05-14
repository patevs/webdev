/**
 *  app/js/RoadDirectory/selectRoad.js
 *
 */

"use strict";

/**
 *  SelectRoadCtrl
 */
angular.module("trackrApp").controller("SelectRoadCtrl", function($scope, $log) {
	/* FIELDS */
	// get road info data element
	let _roadInfoTable = angular.element("#road-info-table");
	// show select road button
	let _btnSelectRoad = angular.element("#btn-select-road");
	// initialize road directory select picker element
	let _roadSelectPicker = angular.element("#selectRoad").selectpicker();

	/* FUNCTIONS */
	_roadSelectPicker.on("changed.bs.select", function() {
		// update selected road
		let selectedRoadID = _roadSelectPicker.val();
		$log.log("Selected road value: " + selectedRoadID);
		if (selectedRoadID !== "") {
			_btnSelectRoad.removeClass("ng-hide");
		}
	});
});

/* EOF */
