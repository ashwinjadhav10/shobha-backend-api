const config = {
    live: {
        server: {
            port: 8001
        },
        pgconfig: {
            skmpgconfig: { host: "", user: "", database: "", password: "", port: "" }
        }

    }
};

const env = 'live';
config[env].env = env;
module.exports = config[env];

