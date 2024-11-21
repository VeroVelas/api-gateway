"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLOrderRepository = void 0;
const Order_1 = require("../../domain/entities/Order");
class MySQLOrderRepository {
    constructor(db) {
        this.db = db;
    }
    create(order) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield this.db.execute("INSERT INTO pedidos (userId, product, quantity, status) VALUES (?, ?, ?, ?)", [order.userId, order.product, order.quantity, order.status]);
            order.id = result.insertId;
            return order;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield this.db.query("SELECT * FROM pedidos WHERE id = ?", [id]);
            if (rows.length === 0)
                return null;
            const row = rows[0];
            return new Order_1.Order(row.id, row.userId, row.product, row.quantity, row.status);
        });
    }
}
exports.MySQLOrderRepository = MySQLOrderRepository;
