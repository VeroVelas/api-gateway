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
exports.MySQLUserRepository = void 0;
const user_1 = require("../../domain/entities/user");
class MySQLUserRepository {
    constructor(db) {
        this.db = db;
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield this.db.execute("INSERT INTO usuarios (name, email, phone) VALUES (?, ?, ?)", [user.name, user.email, user.phone]);
            user.id = result.insertId;
            return user;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield this.db.query("SELECT * FROM usuarios WHERE id = ?", [id]);
            if (rows.length === 0)
                return null;
            const row = rows[0];
            return new user_1.User(row.id, row.name, row.email, row.phone);
        });
    }
}
exports.MySQLUserRepository = MySQLUserRepository;
