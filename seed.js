'use strict';

var chalk = require('chalk');
var Promise = require('bluebird');

var db = require('./server/models/_db.js');
var Emotion = require('./server/models/emotion-model.js');
var Selfie = require('./server/models/selfie-model.js');
// var img = require('./images/untitled-110.jpg');


var seedEmo = function() {
  var emos = {
    emoji: 'happiness',
    anger: 0.03808307,
    contempt: 0.0843078643,
    disgust: 0.0146942791,
    fear: 0.08457579,
    happiness: 0.001780773,
    neutral: 0.3749048,
    sadness: 0.008804665,
    surprise: 0.39284873
  };

  var EmoPromises = [];

  EmoPromises.push(Emotion.create(emos));

  // emos.forEach(function(friend) {
  //   FriendPromises.push(Friend.create(friend))
  // })

  return EmoPromises;
};


var seedSelfie = function() {
  var selfies = [
    {
      imageUrl: 'http://universe.byu.edu/wp-content/uploads/2014/02/SelfiePolice_1.jpg'
    },
    {
      imageUrl: 'https://drive.google.com/uc?id=0Bw82flTH7p5ld0ItWnFXaW1HRTg'
    }
  ];

  var SelfiePromises = [];

  // SelfiePromises.push(Selfie.create(selfies));

  selfies.forEach(function(selfie) {
    SelfiePromises.push(Selfie.create(selfie));
  });

  return SelfiePromises;
};


db.sync({ force: true })
.then(function() {
  return Promise.all(seedEmo().concat(seedSelfie()));
})
.then(function() {
  console.log(chalk.green('seed successful'));
})
.catch(function(err) {
  console.log(chalk.red(err));
})
.finally(function() {
  db.close();
  return null;
});