/*
 *   ___      ___ _______   ___       ________  ________  ________  ________  _____ ______   _______
 *  |\  \    /  /|\  ___ \ |\  \     |\   __  \|\   ___ \|\   __  \|\   __  \|\   _ \  _   \|\  ___ \
 *  \ \  \  /  / | \   __/|\ \  \    \ \  \|\  \ \  \_|\ \ \  \|\  \ \  \|\  \ \  \\\__\ \  \ \   __/|
 *   \ \  \/  / / \ \  \_|/_\ \  \    \ \  \\\  \ \  \ \\ \ \   _  _\ \  \\\  \ \  \\|__| \  \ \  \_|/__
 *    \ \    / /   \ \  \_|\ \ \  \____\ \  \\\  \ \  \_\\ \ \  \\  \\ \  \\\  \ \  \    \ \  \ \  \_|\ \
 *     \ \__/ /     \ \_______\ \_______\ \_______\ \_______\ \__\\ _\\ \_______\ \__\    \ \__\ \_______\
 *      \|__|/       \|_______|\|_______|\|_______|\|_______|\|__|\|__|\|_______|\|__|     \|__|\|_______|
 *
 */

var request = require("request");

function Velodrome(public_key, private_key) {
  this.config = {
    api: {
      api_host: "https://api.velodro.me",
      api_base_url: "",
      keys: {
        public_key: public_key,
        private_key: private_key
      },
      auth_token: "Basic " + new Buffer(public_key + ":" + private_key).toString("base64")
    }
  }
}

Velodrome.prototype.buildUrl = function (route) {
  return this.config.api.api_host + this.config.api.api_base_url + route;
};

Velodrome.prototype.sendRequest = function (method, route, fields = []) {
  // Build a URL
  var url = this.buildUrl(route);

  request({
    "method": method,
    "uri": url,
    headers: {
       "Content-Type": "application/json"
     }
  }, function (error, response, body) {
    if (error) {
      throw error;
    } else if (response && response.statusCode == 200) {
      return body;
    } else if (response) {
      return response;
    } else {
      return {};
    }
  });

}

Velodrome.prototype.echo = function () {
  return this;
}

Velodrome.prototype.getAccount = function () {
  // Fetch the user's account
}


module.exports = Velodrome;