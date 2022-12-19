let cluster = require('cluster');
const { application } = require('express');

if (cluster.isMaster) {
    let numMembers = require('os').cpus().length;

    console.log('Master cluster setting is done for ' + numMembers + ' Workeres');

    for (let i = 0; i < numMembers; i++) {
        cluster.fork();
    }

    cluster.on('online', function (workeres) {
        console.log('cluster workers is online -- ' + workeres.process.pid);
    });

    cluster.on('exit', function (workeres, code, signals) {
        console.log('Workers ' + workeres.process.pid + ' died with code:' + code + ', and singles ' + signals);
        console.log('Workers ' + workeres.process.pid + ' died with code:' + code + ', and singles ' + signals);
    });


} else {
    let jwt = require('jsonwebtoken');
    let express = require('express');
    let app = express();
    const bodyParse = require('body-parser');
    let appConfig = require('./src/configs/appconfig')

    app.use(bodyParse.json({
        limit: '60000000',
        type: 'application/json'
    }))

    app.use(bodyParse.urlencoded({
        limit: '60000000',
        extended: true
    }));

    let port = appConfig.server.port;
    //Route for API
    let router = express.Router();



}