'use strict';

var Sequelize = require('sequelize');
var db = require('./_db.js');


var Selfie = db.define('selfie', {
	// SCHEMA
	imageUrl: {
		type: Sequelize.STRING,
		allowNull: false
	}

}, {
	// OPTIONS

});


module.exports = Selfie;