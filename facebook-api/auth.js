var utils1 = require('../facebook-api/utils1');
 module.exports = (req, res) => {
    var challenge = utils1.parseUrl(req.url);
    res.end(challenge['hub.challenge']);
  }