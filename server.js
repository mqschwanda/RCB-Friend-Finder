var PORT = process.env.PORT || 8080;
/***
  require the basic npm packages we plan on using:
    `express`, `path` and `body-parser`
***/
// EXPRESS CONFIGURATION
var express = require('express');
var server = express();
// PATH
var path = require('path');
// BODY PARSER
var bodyParser = require('body-parser');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.text());
server.use(bodyParser.json({type:'application/vnd.api+json'}));
server.use(express.static(path.join(__dirname, 'public')));
/***
  require routing which lives in the `index.js` file
***/
require('./app/routing/index.js')(server, path);
/***
  setup express router
***/
server.listen(PORT, function() {
	console.log("App listening on PORT: "+PORT);
});
