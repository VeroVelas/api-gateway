// src/infrastructure/routes/healthRoutes.ts
import { Router } from "express";
import { HealthController } from "../controllers/HealthController";
import { CheckServiceHealth } from "../../application/useCases/CheckServiceHealth";
import { InMemoryHealthRepository } from "../repositories/InMemoryHealthRepository";

const healthRouter = Router();
const healthRepository = new InMemoryHealthRepository();
const checkServiceHealth = new CheckServiceHealth(healthRepository);
const healthController = new HealthController(checkServiceHealth);

healthRouter.get("/health", (req, res) => healthController.handleHealthCheck(req, res));

export default healthRouter;
