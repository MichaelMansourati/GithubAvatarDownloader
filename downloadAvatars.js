var request = require('request');
var fs = require('fs');

console.log('Welcome to the Github Avatar Downloader!');

var GITHUB_USER = "NiceBoy95";
var GITHUB_TOKEN = "9150e2b1f8a696b70dd8cea72f16e863238cf5af";

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL ='https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  console.log(requestURL);
  request({method: 'GET', url: requestURL, headers: {'User-Agent': "GitHub Avatar Downloader - Student Project"}
}, function(err, response, body) {
    if (err) throw err;
    response.setEncoding('utf8');
    console.log('Response Status Code:', response.statusCode);
    var responseBody = JSON.parse(response.body);
    // debugger
    responseBody.forEach(function(githubUser) {
      var filepath = "avatars2/" + githubUser.login + ".jpg";
      downloadImageByURL(githubUser.avatar_url, filepath);
    })
  });
}

var args = process.argv.slice(2);


getRepoContributors(args[0], args[1], function(err, result) {});

function downloadImageByURL (url, filePath) {
  request(url).pipe(fs.createWriteStream(filePath));
}

