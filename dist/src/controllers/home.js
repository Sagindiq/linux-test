"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    GET: (_, res) => {
        try {
            res.render('home.ejs');
        }
        catch (error) {
            throw error;
        }
    }
};
