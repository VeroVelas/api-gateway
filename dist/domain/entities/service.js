"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
// src/domain/entities/Service.ts
class Service {
    constructor(name, url, status = "unknown") {
        this.name = name;
        this.url = url;
        this.status = status;
    }
}
exports.Service = Service;
