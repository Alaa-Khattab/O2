module.exports = {
    "GET /": require("../google-sheet-api/index.js"),
    "POST /sheet": require("../google-sheet-api/sheet.js"),
    "GET /facebook": require('../facebook-api/auth.js'),
    "POST /facebook": require('../facebook-api/receive.js')
}
