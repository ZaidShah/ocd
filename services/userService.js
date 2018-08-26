const Sequelize = require('sequelize');

class Repository {
    constructor(context) {
        this.context = context || {};
        this.model = this.createModel();
    }

    createModel() {
        return this.context.db.define('user', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
                
            },
            name: {
                type: Sequelize.TEXT
            }
        },{
            timestamps: false
        });
    }

     async findAll() {
        return await this.model.findAll();
    }

    async create(user) {
        return await this.model.create(user);
    }

    async update(user) {
       return await this.model.update({name: user.name}, {where: {id: user.id}});
    }
}

module.exports = class {

    constructor(context) {
        this.context = context || {};
        this.repository = new Repository(context);
    }

    async findAll() {
        return await this.repository.findAll();
    }

    async create(name) {
        return await this.repository.create({name: name || 'john doe'});
    }

    async update(input) {
        return await this.repository.update(input);
    }
};