var express = require('express');
var router = express.Router();
var Emotion = require('../models/emotion-model.js');


// GET all emotion data
// TO DO: transform to object of emotions with arrays for each day
router.get('/', (req, res, next) => {
	Emotion.findAll()
	.then(function(allEmoData) {	// Array of objects
		// var allData = {};
		// allEmoData.forEach(function(dayEmos) {

		// })
		res.json(allEmoData);
	})
	.catch(next);
});

	// {
 //      "anger": 0.002819255,
 //      "contempt": 0.07464514,
 //      "disgust": 0.0074378415,
 //      "fear": 0.0000554409853,
 //      "happiness": 0.389746457,
 //      "neutral": 0.5199306,
 //      "sadness": 0.004894066,
 //      "surprise": 0.000471211737
 //    }


// GET emotion data for specified selfie
router.get('/:selfieId', (req, res, next) => {
	Emotion.findOne({
		where: {
			selfieId: req.params.selfiId
		}
	})
	.then(function(foundEmotions) {
		res.status(201).json(foundEmotions);
	})
	.catch(next);
});

// Add emotion data for the day (include selfieId in req.body???)
router.post('/', (req, res, next) => {
	Emotion.create(req.body)
	.then(function(createdEmos) {
		res.status(201).json(createdEmos);
	})
	.catch(next);
});


module.exports = router;
