// src/domain/entities/Service.ts
export class Service {
    constructor(
      public name: string,
      public url: string,
      public status: string = "unknown"
    ) {}
  }
  