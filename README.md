# node-velodrome
A Node.js client for the Velodrome API

Install
=======
```bash
npm install velodrome
```

API Key
=======
API keys can be requested by emailing *[hi@velodro.me](mailto:hi@velodro.me)*.

General Info
============
This API library is based on [mikeal](https://github.com/mikeal)'s *[request](https://github.com/request/request)* library. As such each API request calls the callback provided with three parameters (*error*, *resource*, *data*) as in the [*node-request*](https://github.com/request/request) library. More info can be found in the [*request* library documentation](https://github.com/request/request).

API keys are required for all requests.

Usage
=====
Include and initialise the library like so:
```javascript
var velodrome = require("velodrome");
var api       = new velodrome("YOUR_PUBLIC_KEY", "YOUR_PRIVATE_KEY");
```

List Cities Example
===================
The following example shows how the Velodrome Node.js module could be used to list all cities Velodrome is available in.
```javascript
var velodrome = require("velodrome");
var api       = new velodrome("YOUR_PUBLIC_KEY", "YOUR_PRIVATE_KEY");

api.listCities(function (error, resource, data) {
	if (error) {
		throw error;
	} else {
		// data contains all the cities in a JS object
		console.log(data);
	}
});
```

Method List
===========
Coming soon.