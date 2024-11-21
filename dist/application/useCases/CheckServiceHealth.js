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
exports.CheckServiceHealth = void 0;
const ServiceHealthAdapter_1 = require("../../infrastructure/adapters/ServiceHealthAdapter");
class CheckServiceHealth {
    constructor(healthRepository) {
        this.healthRepository = healthRepository;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const services = yield this.healthRepository.getServices();
            const healthStatuses = yield Promise.all(services.map((service) => __awaiter(this, void 0, void 0, function* () {
                const status = yield ServiceHealthAdapter_1.ServiceHealthAdapter.checkHealth(service.url);
                yield this.healthRepository.updateServiceStatus(service.name, status);
                return { name: service.name, status };
            })));
            return healthStatuses;
        });
    }
}
exports.CheckServiceHealth = CheckServiceHealth;
