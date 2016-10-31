var path = require('path'); // DEPENDENCIES

module.exports = function (app) { // ROUTING

	app.get('/survey', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});
	app.use(function (req, res) { // DEFAULT
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

};
