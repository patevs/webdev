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
	// view-model
	let vm = this;
	vm.scope = $scope;

	// initialize road directory select picker element
	let _roadSelectPicker = angular.element("#selectRoad").selectpicker();
	// get road info data element
	let _roadInfoTable = angular.element("#road-info-table");
	// update road directory button element
	let _btnUpdateRoads = angular.element("#btn-update-roads");

	/* METHOD CALLS */
	_roadSelectPicker.on("changed.bs.select", function() {
		// update selected road
		let selectedRoadID = _roadSelectPicker.val();
		$log.log("Selected road value: " + selectedRoadID);
		if (selectedRoadID !== "") {
			_btnUpdateRoads.removeClass("ng-hide");
			//_btnUpdateRoads.addClass("ng-hide");
		}
	});

	/* FUNCTIONS */

	/**
	 * clear road info table
	 */
	let _clearRoadInfo = function() {
		_roadInfoTable.bootstrapTable("destroy");
		//roadInfoPanel.addClass("ng-hide");
	};

	/**
	 * Display road info data
	 * @param {road data to display} roadData
	 */
	let _displayRoadInfo = function(roadData) {
		// clear old table
		_clearRoadInfo();
		// create bootstrap table
		_roadInfoTable.bootstrapTable({
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
					id: roadData.ID,
					code: roadData.Code,
					type: roadData.Type,
					section: roadData.Section,
					location: roadData.Location,
					gps: roadData.GPS
				}
			]
		});
	};

	//vm.scope.selectRoad = function() {};
});

/* EOF */
