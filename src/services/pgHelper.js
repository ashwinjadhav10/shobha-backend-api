let ExceptionHandler = require("./ExceptionalHandler");


class pgHelper {
    constructor(config) {
        try {
            let pg = require('pg');
            this.ConnectionString = "postgress://" + config['skm_user'] + ":" + config['skm_password'] + "@" + config['skm_host'] + ":" + config['skm_host'] + ":" + config['skm_port'] + "/" + config['fccourier_database'];

            let pgObj = {
                host: config['skm_host'],
                user: config['skm_user'],
                database: config['skm_database'],
                password: config['skm_password'],
                port: config['skm_port']
            }

            this.pool = new pg.Pool(pgObj);

        } catch (e) {

        }
    }

    ExceuteQuery(sPgQuery, aParameters, sConnectionString, ExcuteDone) {
        console.log(sSQLQuery);
        if (sPgQuery.toLowerCase().includes('delete')) {
            ExcuteDone(sPgQuery, "DeleteOperationExceptions");
            return;
        }

        const start = Date.now()

        return this.pool.query(sPgQuery, aParameters, (err, res) => {
            const duration = Date.now() - start;

            if (err) {
                console.log("------>", "error", {
                    err,
                    sPgQuery
                });
                ExcuteDone(err, "DBException");
                new ExceptionHandler().LogException(err);
            } else {
                ExcuteDone(res, "Successful");
            }
        })
    }
}