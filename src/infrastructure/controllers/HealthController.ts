// src/infrastructure/controllers/HealthController.ts
import { Request, Response } from "express";
import { CheckServiceHealth } from "../../application/useCases/CheckServiceHealth";


export class HealthController {
  constructor(private checkServiceHealth: CheckServiceHealth) {}

  async handleHealthCheck(req: Request, res: Response): Promise<void> {
    const healthStatuses = await this.checkServiceHealth.execute();
    res.json(healthStatuses);
  }
}
