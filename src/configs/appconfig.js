const config = {
    live: {
        server: {
            port: 8001
        },
        pgconfig: {
            skmpgconfig: { host: "localhost", user: "postgres", database: "postgres", password: "postgres", port: "5432" },
            skm_host: "localhost",
            skm_user: "postgres",
            skm_database: "postgres",
            skm_password: "postgres",
            skm_port: "5432"
        }

    }
};

const env = 'live';
config[env].env = env;
module.exports = config[env];

