/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"new_demo/new_demo/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});