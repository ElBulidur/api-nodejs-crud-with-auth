"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = require("express");
const productCreate_controller_1 = __importDefault(require("../controllers/product/productCreate.controller"));
const productDeleteSelf_controller_1 = __importDefault(require("../controllers/product/productDeleteSelf.controller"));
const productList_controller_1 = __importDefault(require("../controllers/product/productList.controller"));
const productListOne_controller_1 = __importDefault(require("../controllers/product/productListOne.controller"));
const productUpdate_controller_1 = __importDefault(require("../controllers/product/productUpdate.controller"));
const routes = (0, express_1.Router)();
const productRoutes = () => {
    routes.post("/", productCreate_controller_1.default);
    routes.get("/", productList_controller_1.default);
    routes.get("/:id", productListOne_controller_1.default);
    routes.delete("/:id", productDeleteSelf_controller_1.default);
    routes.patch("/:id", productUpdate_controller_1.default);
    return routes;
};
exports.productRoutes = productRoutes;
