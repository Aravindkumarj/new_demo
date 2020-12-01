/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"new_demo/new_demo/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});