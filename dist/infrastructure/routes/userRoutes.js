"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/infrastructure/routes/userRoutes.ts
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const MySQLUserRepository_1 = require("../repositories/MySQLUserRepository");
const CreateUserUseCase_1 = require("../../application/useCases/CreateUserUseCase");
const db_1 = __importDefault(require("../db"));
const userRoutes = (0, express_1.Router)();
const userRepository = new MySQLUserRepository_1.MySQLUserRepository(db_1.default);
const createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase(userRepository);
const userController = new UserController_1.UserController(createUserUseCase);
userRoutes.post("/", (req, res) => userController.create(req, res));
exports.default = userRoutes;
