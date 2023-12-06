/*global QUnit*/

sap.ui.define([
	"comsap/teammarvelhub/controller/Mainpage.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Mainpage Controller");

	QUnit.test("I should test the Mainpage controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
