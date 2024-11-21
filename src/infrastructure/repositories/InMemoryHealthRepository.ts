// src/infrastructure/repositories/InMemoryHealthRepository.ts
import { HealthRepository } from "./HealthRepository";
import { Service } from "../../domain/entities/service";

export class InMemoryHealthRepository implements HealthRepository {
  private services: Service[] = [
    new Service("ServiceA", "http://localhost:3001/health"),
    new Service("ServiceB", "http://localhost:3002/health"),
  ];

  async getServices(): Promise<Service[]> {
    return this.services;
  }

  async updateServiceStatus(name: string, status: string): Promise<void> {
    const service = this.services.find((s) => s.name === name);
    if (service) {
      service.status = status;
    }
  }
}
