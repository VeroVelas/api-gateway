// src/application/useCases/CheckServiceHealth.ts
import { HealthRepository } from "../../infrastructure/repositories/HealthRepository";
import { ServiceHealthAdapter } from "../../infrastructure/adapters/ServiceHealthAdapter";

export class CheckServiceHealth {
  constructor(private healthRepository: HealthRepository) {}

  async execute(): Promise<{ name: string; status: string }[]> {
    const services = await this.healthRepository.getServices();

    const healthStatuses = await Promise.all(
      services.map(async (service) => {
        const status = await ServiceHealthAdapter.checkHealth(service.url);
        await this.healthRepository.updateServiceStatus(service.name, status);
        return { name: service.name, status };
      })
    );

    return healthStatuses;
  }
}
