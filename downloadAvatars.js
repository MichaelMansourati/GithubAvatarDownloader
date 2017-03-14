var request = require('request');

console.log('Welcome to the Github Avatar Downloader!');

var GITHUB_USER = "NiceBoy95";
var GITHUB_TOKEN = "9150e2b1f8a696b70dd8cea72f16e863238cf5af";

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  console.log(requestURL)
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});

