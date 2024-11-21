// src/domain/repositories/UserRepository.ts
import { User } from "../../domain/entities/user";

export interface UserRepository {
  create(user: User): Promise<User>;
  findById(id: number): Promise<User | null>;
}
