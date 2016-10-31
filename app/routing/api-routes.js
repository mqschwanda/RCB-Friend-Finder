var friendData = require('../data/friends.js'); // LOAD DATA

module.exports = function (app) { // ROUTING
	// API GET Request
	app.get('/api/friends', function (req, res) {
		res.json(friendData);
	});
	// API POST Request
	app.post('/api/friends', function (req, res) {
		friendData.push(req.body);
		var data = friendData[0];
		res.json(data);
	});
};
