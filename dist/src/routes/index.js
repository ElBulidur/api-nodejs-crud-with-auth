"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
const user_routes_1 = require("./user.routes");
const product_routes_1 = require("./product.routes");
const cart_routes_1 = require("./cart.routes");
const buy_routes_1 = require("./buy.routes");
const appRoutes = (app) => {
    app.use("/users", (0, user_routes_1.userRoutes)());
    app.use("/products", (0, product_routes_1.productRoutes)());
    app.use("/cart", (0, cart_routes_1.cartRoutes)());
    app.use("/buy", (0, buy_routes_1.buyRoutes)());
};
exports.appRoutes = appRoutes;
