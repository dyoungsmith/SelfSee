'use strict';

var Sequelize = require('sequelize');
var db = require('./_db.js');


var Emotion = db.define('emotion', {
	// SCHEMA
	emoji: {
		type: Sequelize.STRING,
		// allowNull: false
	},
	// NB: Sequelize.DECIMAL stores as a string! change/coerce later for calculations
	anger: {
		type: Sequelize.DECIMAL,
		allowNull: false
	},
	contempt: {
		type: Sequelize.DECIMAL,
		allowNull: false
	},
	disgust: {
		type: Sequelize.DECIMAL,
		allowNull: false
	},
	fear: {
		type: Sequelize.DECIMAL,
		allowNull: false
	},
	happiness: {
		type: Sequelize.DECIMAL,
		allowNull: false
	},
	neutral: {
		type: Sequelize.DECIMAL,
		allowNull: false
	},
	sadness: {
		type: Sequelize.DECIMAL,
		allowNull: false
	},
	surprise: {
		type: Sequelize.DECIMAL,
		allowNull: false
	}

}, {
	// OPTIONS

});


module.exports = Emotion;