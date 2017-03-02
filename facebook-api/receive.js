var utils1 = require('../facebook-api/utils1');

module.exports = (req, res) => {
    utils1.parseBody(req, (err, payload) => {
        // if (err) {
        //     console.log('err', err);
        //     return res.end('Error');
        // }
        console.log('User ID :', payload.entry[0].messaging[0].sender.id);
        console.log('message :', payload.entry[0].messaging[0].message.text);
        res.end();
    });
}
