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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../../data-source");
const globals_1 = require("@jest/globals");
const userList_service_1 = __importDefault(require("../../../services/user/userList.service"));
(0, globals_1.describe)("Create an user", () => {
    let connection;
    //conectando no banco
    (0, globals_1.beforeAll)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield data_source_1.AppDataSource.initialize()
            .then((res) => (connection = res))
            .catch((err) => {
            console.log("Error during Data Source initialization", err);
        });
    }));
    //desconectando no banco
    (0, globals_1.afterAll)(() => __awaiter(void 0, void 0, void 0, function* () {
        yield connection.destroy();
    }));
    //fazendo os tests
    (0, globals_1.test)("Should the information of users in the database", () => __awaiter(void 0, void 0, void 0, function* () {
        const userList = yield (0, userList_service_1.default)();
        (0, globals_1.expect)(userList).toHaveProperty("map");
    }));
});
