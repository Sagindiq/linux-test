"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const homeRouter = (0, express_1.Router)();
const home_1 = __importDefault(require("../controllers/home"));
const books_1 = __importDefault(require("../controllers/books"));
homeRouter
    .get('/', home_1.default.GET)
    .get('/books', books_1.default.GET);
exports.default = homeRouter;
