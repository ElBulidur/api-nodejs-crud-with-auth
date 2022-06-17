"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
const cart_entity_1 = require("../../entities/cart.entity");
const product_entity_1 = require("../../entities/product.entity");
const user_entity_1 = require("../../entities/user.entity");
const appError_1 = require("../../errors/appError");
const utils_1 = require("../../utils");
const cartAddProdService = (product_id, userEmail) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.User);
    const cartRepository = data_source_1.AppDataSource.getRepository(cart_entity_1.Cart);
    const productRepository = data_source_1.AppDataSource.getRepository(product_entity_1.Product);
    const user = yield userRepository.findOne({ where: { email: userEmail } });
    const cart = yield cartRepository.findOne({ where: { id: user === null || user === void 0 ? void 0 : user.cart.id } });
    const productToAdd = yield productRepository.findOne({
        where: { id: product_id },
    });
    if (!productToAdd) {
        throw new appError_1.AppError(404, "Product not found");
    }
    if (cart && productToAdd) {
        if (cart.products.filter((prod) => prod.name === productToAdd.name).length > 0) {
            throw new appError_1.AppError(409, "Product is already in the cart");
        }
        cart.products = [...cart.products, productToAdd];
        cart.subTotal = (0, utils_1.fixedFloat)(cart.subTotal + productToAdd.price);
        yield cartRepository.save(cart);
        return cart;
    }
});
exports.default = cartAddProdService;
