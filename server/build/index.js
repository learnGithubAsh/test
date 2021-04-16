"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/', function (req, res) {
    res.send('hello');
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true,
}));
// ,
//     "start:run": "nodemon build/.js",
//     "start": "concurrently npm:start:*"
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("Server started on PORT " + PORT);
});
