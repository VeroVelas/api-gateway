// src/infrastructure/adapters/ServiceHealthAdapter.ts
import axios from "axios";

export class ServiceHealthAdapter {
  static async checkHealth(url: string): Promise<string> {
    try {
      const response = await axios.get(url);
      return response.status === 200 ? "healthy" : "unhealthy";
    } catch {
      return "unhealthy";
    }
  }
}
