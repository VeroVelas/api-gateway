// src/domain/entities/Order.ts
export class Order {
    constructor(
      public id: number | null,
      public userId: number,
      public product: string,
      public quantity: number,
      public status: string = "pending"
    ) {}
  }
  