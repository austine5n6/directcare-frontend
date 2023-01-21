module.exports = {
    HOST: "localhost",
    USER: "sqluser",
    PASSWORD: "password",
    DB: "directcare",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};