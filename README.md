# Friend Finder - Node and Express Servers

### Quick Start
```
git clone https://github.com/mqschwanda/RCB-Friend-Finder.git
cd RCB-Friend-Finder
npm run setup
npm run start
```

### Overview
Compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site takes in results from users' surveys, then compares their answers with those from other users. The app then displays the name and picture of the user with the best overall match.
* Uses Express to handle routing.

#### File Structure
```
FriendFinder
	- app
		- data
			- friends.js
		- public
			- home.html
			- survey.html
		- routing
			- index.js
			- api-routes.js
			- html-routes.js
	- node_modules
	- package.json
	- server.js
```

#### Data Structure
```
module.exports = [
	{
		"name":"Nicolas",
		"src":"http://placecage.com/300/300",
		"scores":[5,1,4,4,5,1,2,5,4,1]
	},{
		"name":"William",
		"src":"http://fillmurray.com/300/300",
		"scores":[1,4,5,2,1,5,4,4,1,5]
	}
];
```
