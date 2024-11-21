// src/infrastructure/routes/userRoutes.ts
import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { MySQLUserRepository } from "../repositories/MySQLUserRepository";
import { CreateUserUseCase } from "../../application/useCases/CreateUserUseCase";
import db from "../db";

const userRoutes = Router();
const userRepository = new MySQLUserRepository(db);
const createUserUseCase = new CreateUserUseCase(userRepository);
const userController = new UserController(createUserUseCase);

userRoutes.post("/", (req, res) => userController.create(req, res));

export default userRoutes;

