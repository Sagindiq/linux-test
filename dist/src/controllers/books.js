"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arr = [
    { title: 'a', author: 'a author', price: 1000 }, { title: 'a', author: 'a author', price: 1000 }, { title: 'a', author: 'a author', price: 1000 }, { title: 'a', author: 'a author', price: 1000 }, { title: 'a', author: 'a author', price: 1000 }, { title: 'a', author: 'a author', price: 1000 }, { title: 'a', author: 'a author', price: 1000 }
];
exports.default = {
    GET: (req, res) => {
        try {
            res.json(arr);
        }
        catch (err) {
            throw err;
        }
    }
};
