"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const appError_1 = require("../errors/appError");
const userAuth = (req, res, next) => {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            req.userEmail = decoded.email;
            next();
        });
    }
    catch (error) {
        throw new appError_1.AppError(401, "Invalid Token");
        // return res.status(401).json({ message: "Invalid Token" });
    }
};
exports.userAuth = userAuth;
