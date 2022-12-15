"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: 'api.env' });
const PORT = process.env.PORT || 8000;
const home_router_1 = __importDefault(require("./routes/home.router"));
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, 'views'));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(home_router_1.default);
app.use(express_1.default.static(path_1.default.join(__dirname, '/public')));
app.listen(PORT, () => { console.log(PORT); });
