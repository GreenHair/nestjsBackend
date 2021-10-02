import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("rechnung", { schema: "haushaltsbuch" })
export class Rechnung {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "laden", nullable: true })
  laden: number | null;

  @Column("date", { name: "datum", nullable: true })
  datum: string | null;

  @Column("int", { name: "einmalig", nullable: true })
  einmalig: number | null;

  @Column("int", { name: "person", nullable: true })
  person: number | null;
}
