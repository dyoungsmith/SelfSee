var chalk = require('chalk');
var db = require('./server/models/_db.js');

var app = require('./server/app.js');
var server = require('http').createServer();


db.sync()
.then(function () {
  server.on('request', app);
})
.then(function () {
  var PORT = 8080;
  server.listen(PORT, function () {
    console.log(chalk.blue('Server started on port', chalk.magenta(PORT)));
  });
})
.catch(function (err) {
  console.error(chalk.red(err.stack));
});
