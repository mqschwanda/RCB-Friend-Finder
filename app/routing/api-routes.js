var data = require('../data/friends.js'); // LOAD DATA
/***
  `api-routes.js` file contains two routes:
  	1. A GET route with the url `/api/friends`. This displays a
       JSON of all possible friends.
  	2. A POST routes `/api/friends`. This handles incoming survey
       results and compatibility logic.
***/
module.exports = function (router) {
	// A GET route that displays a JSON of all possible friends.
	router.get('/api/friends', function (req, res) {
		res.json(data);
	});
  // A POST routes that handles incoming survey results and compatibility logic.
	router.post('/api/friends', function (req, res) {
		// set compatability score by finding the sum of the sores from the post
		req.body.compatibility = req.body.scores.reduce(function add(a, b) { // reducer function that sums the array
			return parseInt(a) + parseInt(b);
		}, 0);
		// create an object to hold best match
    var match = {
			name: null,
			img: null,
			compatibility: 999
		};
    // variable to hold the compatibility score
    var compatibility;
    // itterate through the friend data object
    for (var i = 0; i < data.length; i++) {
			// reducer function that sums the array
      compatibility = data[i].scores.reduce(function add(a, b) {
		    return parseInt(a) + parseInt(b);
			}, 0);
			// find the difference in compatibility scores
			compatibility = Math.abs(compatibility - req.body.compatibility);
			/***
				I did not loop through the array finding the difference between each question
				because that would be pointless in the output. The order of opperation allows
				me to take the sum of the array and check that difference.
			***/
      // test the itteration's compatibility against our best match
      if (compatibility <= match.compatibility) { // found new match!
        match.name = data[i].name; // set name
        match.img = data[i].img; // set image source
        match.compatibility = compatibility; // set compatability to test against
      }
    }
    // add the form data to the server after best friend check has finished
    data.push(req.body);
    // respond with and object representing the user's best match
		res.json(match);
	});
}
