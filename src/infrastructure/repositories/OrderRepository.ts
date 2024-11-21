// src/domain/repositories/OrderRepository.ts
import { Order } from "../../domain/entities/Order";

export interface OrderRepository {
  create(order: Order): Promise<Order>;
  findById(id: number): Promise<Order | null>;
}
