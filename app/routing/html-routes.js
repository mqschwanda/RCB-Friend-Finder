/***
  `html-routes.js` file includes three routes:
  	1. A GET Route to `/home` which displays the home page.
  	2. A GET Route to `/survey` which displays the survey page.
    3. A default USE route that leads to `home.html` which
       displays the home page.
***/
var path = require('path'); // DEPENDENCIES
module.exports = function (router, path) {
	// A GET Route to `/home` which displays the home page.
	router.get('/home',function (req, res) {
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	});
  // A GET Route to `/survey` which displays the survey page.
	router.get('/survey', function (req, res) {
		 res.sendFile(path.join(__dirname + "/../public/survey.html"));
	});
  // A default USE route that leads to `home.html` which displays the home page.
  router.use('/',function (req, res) {
    res.redirect('/home');
  });
}
