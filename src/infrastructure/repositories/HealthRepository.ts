// src/domain/repositories/HealthRepository.ts
import { Service } from "../../domain/entities/service";

export interface HealthRepository {
  getServices(): Promise<Service[]>;
  updateServiceStatus(name: string, status: string): Promise<void>;
}
