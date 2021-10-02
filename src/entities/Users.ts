import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("USER_NAME", ["name"], { unique: true })
@Entity("users", { schema: "haushaltsbuch" })
export class Users {
  @PrimaryGeneratedColumn({ type: "int", name: "uid" })
  uid: number;

  @Column("varchar", { name: "name", unique: true, length: 20 })
  name: string;

  @Column("varchar", { name: "password", length: 40 })
  password: string;
}
