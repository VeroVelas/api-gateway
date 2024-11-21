"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/infrastructure/routes/orderRoutes.ts
const express_1 = require("express");
const OrderController_1 = require("../controllers/OrderController");
const MongoOrderRepository_1 = require("../repositories/MongoOrderRepository");
const CreateOrderUseCase_1 = require("../../application/useCases/CreateOrderUseCase");
const db_1 = __importDefault(require("../../infrastructure/db"));
const orderRoutes = (0, express_1.Router)();
const orderRepository = new MongoOrderRepository_1.MySQLOrderRepository(db_1.default);
const createOrderUseCase = new CreateOrderUseCase_1.CreateOrderUseCase(orderRepository);
const orderController = new OrderController_1.OrderController(createOrderUseCase); // Cambié "OrderController" por "orderController"
orderRoutes.post("/", (req, res) => orderController.create(req, res)); // También usé "orderController"
exports.default = orderRoutes;
