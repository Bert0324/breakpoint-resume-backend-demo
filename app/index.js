"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const body_parser_1 = require("body-parser");
const cors_1 = require("./cors");
const breakpoint_1 = require("./breakpoint");
const app = express_1.default();
app.use(cors_1.cors);
app.use(body_parser_1.json());
app.use(multer_1.default({ dest: 'uploads/' }).single('buffer'));
app.post('/breakpoint', breakpoint_1.breakpointResume);
app.listen(3002, () => console.log('started in 3000'));
//# sourceMappingURL=index.js.map