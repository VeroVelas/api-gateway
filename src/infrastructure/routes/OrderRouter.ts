// src/infrastructure/routes/orderRoutes.ts
import { Router } from "express";
import { OrderController } from "../controllers/OrderController";
import { MySQLOrderRepository } from "../repositories/MongoOrderRepository";
import { CreateOrderUseCase } from "../../application/useCases/CreateOrderUseCase";
import db from "../../infrastructure/db";

const orderRoutes = Router();
const orderRepository = new MySQLOrderRepository(db);
const createOrderUseCase = new CreateOrderUseCase(orderRepository);
const orderController = new OrderController(createOrderUseCase); // Cambié "OrderController" por "orderController"

orderRoutes.post("/", (req, res) => orderController.create(req, res)); // También usé "orderController"

export default orderRoutes;
