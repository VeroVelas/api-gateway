// src/infrastructure/repositories/MySQLOrderRepository.ts
import { OrderRepository } from "./OrderRepository";
import { Order } from "../../domain/entities/Order";
import { Connection } from "mysql2/promise";

export class MySQLOrderRepository implements OrderRepository {
  constructor(private db: Connection) {}

  async create(order: Order): Promise<Order> {
    const [result]: any = await this.db.execute(
      "INSERT INTO pedidos (userId, product, quantity, status) VALUES (?, ?, ?, ?)",
      [order.userId, order.product, order.quantity, order.status]
    );
    order.id = result.insertId;
    return order;
  }

  async findById(id: number): Promise<Order | null> {
    const [rows]: any = await this.db.query("SELECT * FROM pedidos WHERE id = ?", [id]);
    if (rows.length === 0) return null;
    const row = rows[0];
    return new Order(row.id, row.userId, row.product, row.quantity, row.status);
  }
}
