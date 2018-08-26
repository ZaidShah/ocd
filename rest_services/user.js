'use strict';
const UserService = require('../services/userService');

module.exports = class {
    static async list(ctx, next) {
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