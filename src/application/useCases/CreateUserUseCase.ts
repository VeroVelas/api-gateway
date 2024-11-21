// src/application/useCases/CreateUserUseCase.ts
import { UserRepository } from "../../infrastructure/repositories/UserRepositories";
import { User } from "../../domain/entities/user";

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(user: User): Promise<User> {
    return await this.userRepository.create(user);
  }
}
