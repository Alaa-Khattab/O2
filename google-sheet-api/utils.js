var qs = require('querystring');
var https = require('https');
var google = require('googleapis');
var key = require('../key.json');
var id=0;
function parseBody(req, callback) {
    var body = '';
    req.on('data', function(data) {
        body += data;
    });
    req.on('end', function() {
    	var id1 = JSON.stringify(id);
        var body1 = qs.parse(body);
        var source = {
            "range": "Sheet1",
            "majorDimension": "ROWS",
            "values": [
                [body1.username, body1.phone,body1.key]
            ]
        }
        callback(undefined, source);
    });
}

function writesheet(source) {
    var jwtClient = new google.auth.JWT(
        key.client_email,
        null,
        key.private_key, ['https://www.googleapis.com/auth/spreadsheets'],
        null
    );

    var SHEET_ID = '1klLD4Wvfdb5fCwQUx0mbFqg2z1ZinuMZsTf5wO_YCgY';
    jwtClient.authorize((err, tokens) => {
        if (err) {
            console.log(err);
            return;
        }
        var opts = {
            hostname: 'sheets.googleapis.com',
            port: 443,
            path: `/v4/spreadsheets/${SHEET_ID}/values/Sheet1:append?valueInputOption=USER_ENTERED`,
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${tokens.access_token}`
            }
        };
        var req = https.request(opts, (res) => {});
        req.write(source);
        req.end();
    });
}
module.exports = {
    parseBody: parseBody,
    writesheet: writesheet

};
