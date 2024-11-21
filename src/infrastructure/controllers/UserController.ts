// src/infrastructure/controllers/UserController.ts
import { Request, Response } from "express";
import { CreateUserUseCase } from "../../application/useCases/CreateUserUseCase";
import { User } from "../../domain/entities/user";

export class UserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async create(req: Request, res: Response): Promise<void> {
    const { name, email, phone } = req.body;
    const user = await this.createUserUseCase.execute(new User(null, name, email, phone));
    res.status(201).json(user);
  }
}
