'use strict';
const UserService = require('../service/userService');

module.exports = class {
    static async index(ctx, next) {
        try {
            const userService = new UserService(ctx);
            ctx.body = await userService.findAll();           

        } catch (error) {
            ctx.body = error;
        }
    }

    static async create(ctx, next) {
        try {
            const userService = new UserService(ctx);
            ctx.body = await userService.create(ctx.params.name);
            
        } catch (error) {
            
        }
    }

    static async update(ctx, next) {
        try {
            const userService = new UserService(ctx);
            ctx.body = await userService.update({id: ctx.params.id, name: ctx.params.name});
            
        } catch (error) {
            
        }
    }
}