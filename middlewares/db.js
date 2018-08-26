const Sequelize = require('sequelize');
const config = require('../config');

class DbManager {
    constructor() {
        this.host = config.db.host;
        this.port = config.db.port;

        this.database = config.db.database;
        this.username = config.db.username;
        this.password = config.db.password;

        this.dialect = config.db.dialect;

        this.pooling = {
            min: config.db.pooling.min,
            max: config.db.pooling.max,
            acquire: config.db.pooling.acquire,
            idle: config.db.pooling.idle
        }
    }

    initialize() {
        this.dbConnection = new Sequelize(this.database, this.username, this.password, {
            host: this.host,
            port: this.port,
            dialect: this.dialect,
            operatorsAliases: false,

            pool: {
                min: this.pooling.min,
                max: this.pooling.max,
                acquire: this.pooling.acquire,
                idle: this.pooling.idle
            }
        });

        return this.dbConnection;
    }
};


module.exports = class {

    async setup(ctx, next) {
        try {
            ctx.db = new DbManager().initialize();
            await next();
        } catch (e) {
            //use a logger
        }
        //.authenticate()
        // .then(() => {
        //   console.log('Connection has been established successfully.');
        // })
        // .catch(err => {
        //   console.error('Unable to connect to the database:', err);
        // });
    }
};

// const sequelize = new Sequelize('learning', 'learning', '12345678', {
//     host: 'localhost:5433',
//     dialect: 'postgres',
//     operatorsAliases: false,

//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   });