// src/application/useCases/CreateOrderUseCase.ts
import { OrderRepository } from "../../infrastructure/repositories/OrderRepository";
import { Order } from "../../domain/entities/Order";

export class CreateOrderUseCase {
  constructor(private orderRepository: OrderRepository) {}

  async execute(order: Order): Promise<Order> {
    return await this.orderRepository.create(order);
  }
}
