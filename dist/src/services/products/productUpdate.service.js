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
const product_entity_1 = require("../../entities/product.entity");
const appError_1 = require("../../errors/appError");
const productUpdateService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const productRepository = data_source_1.AppDataSource.getRepository(product_entity_1.Product);
    const product = yield productRepository.findOne({ where: { id } });
    if (!product) {
        throw new appError_1.AppError(409, `Product with ID ${id} not found`);
    }
    if (!data.name) {
        data.name = product.name;
    }
    if (!data.description) {
        data.description = product.description;
    }
    if (!data.price) {
        data.price = product.price;
    }
    yield productRepository.update(product.id, {
        name: data.name,
        description: data.description,
        price: data.price,
    });
    return true;
});
exports.default = productUpdateService;
