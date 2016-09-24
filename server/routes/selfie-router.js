var express = require('express');
var router = express.Router();
var Selfie = require('../models/selfie-model.js');

// GET all selfies - for view all
// Eager load with all emotion data!!
router.get('/', function(req, res, next) {
	Selfie.findAll()
	.then(function(allSelfies) {
		res.json(allSelfies);
	})
	.catch(next);
});

// Take new selfie
// must make a post request to Microsoft once selfie is saved in db
router.post('/', function(req, res, next) {
	Selfie.create(req.body)
	.then(function(savedSelfie) {
		router.post('https://api.projectoxford.ai/emotion/v1.0/recognize', function(req, res) {
			req.setHeaders = {
			    'Content-Type': 'application/json',
			    'Ocp-Apim-Subscription-Key': '94d515677e3a410c9ce8792baeb53c6c'
			};
			req.body = { url: savedSelfie.imageUrl };
		});
		console.log('IS THIS DATA??', res);
		res.json(res.body);
		// .then(function(emotionData) {
		// 	console.log('HOPE THIS IS DATA!', emotionData)
		// 	res.json(emotionData);
		// })
		// .catch(next);

		// console.log('SELFIE???', savedSelfie);
		// res.json(savedSelfie);
	})
	.catch(next);
});

// GET specific selfie
router.get('/:selfieId', function(req, res, next) {
	Selfie.findById(req.params.selfieId)
	.then(function(foundSelfie) {
		res.json(foundSelfie);
	})
	.catch(next);
});


module.exports = router;