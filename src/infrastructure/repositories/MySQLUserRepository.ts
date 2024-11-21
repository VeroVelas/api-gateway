// src/infrastructure/repositories/MySQLUserRepository.ts
import { UserRepository } from "../../infrastructure/repositories/UserRepositories";
import { User } from "../../domain/entities/user";
import { Connection } from "mysql2/promise";

export class MySQLUserRepository implements UserRepository {
  constructor(private db: Connection) {}

  async create(user: User): Promise<User> {
    const [result]: any = await this.db.execute(
      "INSERT INTO usuarios (name, email, phone) VALUES (?, ?, ?)",
      [user.name, user.email, user.phone]
    );
    user.id = result.insertId;
    return user;
  }

  async findById(id: number): Promise<User | null> {
    const [rows]: any = await this.db.query("SELECT * FROM usuarios WHERE id = ?", [id]);
    if (rows.length === 0) return null;
    const row = rows[0];
    return new User(row.id, row.name, row.email, row.phone);
  }
}
