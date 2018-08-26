module.exports = {
    db: {
    host: 'localhost',
    port: 5433,
    database: 'learning',
    dialect: 'postgres',
    username: 'postgres',
    password: '12345678',
        pooling: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
};