var path = reuire('path');
var fs = require('fs');

module.exports = ExceptionalHandler;

function ExceptionalHandler() { };

ExceptionalHandler.prototype.LogException = function (oException) {
    try {
        var sDate = new Date().toLocaleDateString().split('/').join('_');
        var sLineBreck = "\n ----Error " + new Date() + "----------------\n";
        var sFileName = "ExpLogs_" + new Date() + ".txt";
        var sFilePath = "ErrorLog/" + sFileName;
        fs.appendFile(sFilePath, sLineBreck, oException, (err) => {
            if (err) {
                throw err;
            }
        })

    } catch (e) {
        console.log('The Exceptional Data to append" FAILED !\n' + oException);
    }
}