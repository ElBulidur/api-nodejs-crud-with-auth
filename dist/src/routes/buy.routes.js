"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buyRoutes = void 0;
const express_1 = require("express");
const buyCreateController_1 = __importDefault(require("../controllers/buy/buyCreateController"));
const userAuth_middleware_1 = require("../middlewares/userAuth.middleware");
const routes = (0, express_1.Router)();
const buyRoutes = () => {
    routes.post("/", userAuth_middleware_1.userAuth, buyCreateController_1.default);
    return routes;
};
exports.buyRoutes = buyRoutes;
