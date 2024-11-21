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
exports.InMemoryHealthRepository = void 0;
const service_1 = require("../../domain/entities/service");
class InMemoryHealthRepository {
    constructor() {
        this.services = [
            new service_1.Service("ServiceA", "http://localhost:3001/health"),
            new service_1.Service("ServiceB", "http://localhost:3002/health"),
        ];
    }
    getServices() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.services;
        });
    }
    updateServiceStatus(name, status) {
        return __awaiter(this, void 0, void 0, function* () {
            const service = this.services.find((s) => s.name === name);
            if (service) {
                service.status = status;
            }
        });
    }
}
exports.InMemoryHealthRepository = InMemoryHealthRepository;
