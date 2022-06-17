"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const userCreate_controller_1 = __importDefault(require("../controllers/user/userCreate.controller"));
const userDeleteSelf_controller_1 = __importDefault(require("../controllers/user/userDeleteSelf.controller"));
const userList_controller_1 = __importDefault(require("../controllers/user/userList.controller"));
const userListOne_controller_1 = __importDefault(require("../controllers/user/userListOne.controller"));
const userLogin_controller_1 = __importDefault(require("../controllers/user/userLogin.controller"));
const userUpdate_controller_1 = __importDefault(require("../controllers/user/userUpdate.controller"));
const userAuth_middleware_1 = require("../middlewares/userAuth.middleware");
const routes = (0, express_1.Router)();
const userRoutes = () => {
    routes.post("", userCreate_controller_1.default);
    routes.post("/login", userLogin_controller_1.default);
    routes.get("/", userAuth_middleware_1.userAuth, userList_controller_1.default);
    // routes.get("/", userListController);
    routes.get("/me", userAuth_middleware_1.userAuth, userListOne_controller_1.default);
    routes.delete("/me", userAuth_middleware_1.userAuth, userDeleteSelf_controller_1.default);
    routes.patch("/me/updatePassword", userAuth_middleware_1.userAuth, userUpdate_controller_1.default);
    return routes;
};
exports.userRoutes = userRoutes;
