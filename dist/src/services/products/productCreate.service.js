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
const product_entity_1 = require("../../entities/product.entity");
const data_source_1 = require("../../data-source");
const appError_1 = require("../../errors/appError");
const productCreateService = ({ name, description, price, }) => __awaiter(void 0, void 0, void 0, function* () {
    const productRepository = data_source_1.AppDataSource.getRepository(product_entity_1.Product);
    const productExists = yield productRepository.findOne({ where: { name } });
    if (productExists) {
        throw new appError_1.AppError(409, "Product Already Exists");
    }
    const product = new product_entity_1.Product();
    product.name = name;
    product.description = description;
    product.price = price;
    productRepository.create(product);
    yield productRepository.save(product);
    return product;
});
exports.default = productCreateService;
