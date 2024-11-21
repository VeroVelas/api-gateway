"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
// src/domain/entities/Order.ts
class Order {
    constructor(id, userId, product, quantity, status = "pending") {
        this.id = id;
        this.userId = userId;
        this.product = product;
        this.quantity = quantity;
        this.status = status;
    }
}
exports.Order = Order;
