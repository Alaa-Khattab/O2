var router = require('./google-sheet-api/router.js');

module.exports = function mainHandler(req, res) {
  console.log(req.url);
	var path = req.url.split('?')[0];
  	var route = `${req.method} ${path}`;
   	// var path = req.method + ' ' + req.url;
    try {
        router[route](req, res);
    } catch (error) {
        console.log('path', path);
        console.log('error', error);
        res.end('not found');
    }
};
