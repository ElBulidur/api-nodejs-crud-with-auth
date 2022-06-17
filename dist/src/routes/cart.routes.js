"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRoutes = void 0;
const express_1 = require("express");
const cartAddProd_controller_1 = __importDefault(require("../controllers/cart/cartAddProd.controller"));
const cartDelProd_controller_1 = __importDefault(require("../controllers/cart/cartDelProd.controller"));
const userAuth_middleware_1 = require("../middlewares/userAuth.middleware");
const routes = (0, express_1.Router)();
const cartRoutes = () => {
    routes.post("/", userAuth_middleware_1.userAuth, cartAddProd_controller_1.default);
    routes.delete("/:product_id", userAuth_middleware_1.userAuth, cartDelProd_controller_1.default);
    return routes;
};
exports.cartRoutes = cartRoutes;
