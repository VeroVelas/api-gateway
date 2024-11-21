"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/infrastructure/routes/healthRoutes.ts
const express_1 = require("express");
const HealthController_1 = require("../controllers/HealthController");
const CheckServiceHealth_1 = require("../../application/useCases/CheckServiceHealth");
const InMemoryHealthRepository_1 = require("../repositories/InMemoryHealthRepository");
const healthRouter = (0, express_1.Router)();
const healthRepository = new InMemoryHealthRepository_1.InMemoryHealthRepository();
const checkServiceHealth = new CheckServiceHealth_1.CheckServiceHealth(healthRepository);
const healthController = new HealthController_1.HealthController(checkServiceHealth);
healthRouter.get("/health", (req, res) => healthController.handleHealthCheck(req, res));
exports.default = healthRouter;
