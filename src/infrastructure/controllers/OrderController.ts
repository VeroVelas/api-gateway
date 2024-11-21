// src/infrastructure/controllers/OrderController.ts
import { Request, Response } from "express";
import { CreateOrderUseCase } from "../../application/useCases/CreateOrderUseCase";
import { Order } from "../../domain/entities/Order";

export class OrderController {
  constructor(private createOrderUseCase: CreateOrderUseCase) {}

  async create(req: Request, res: Response): Promise<void> {
    const { userId, product, quantity } = req.body;
    const order = await this.createOrderUseCase.execute(
      new Order(null, userId, product, quantity)
    );
    res.status(201).json(order);
  }
}
