import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("einkommen", { schema: "haushaltsbuch" })
export class Einkommen {
  @PrimaryGeneratedColumn({ type: "int", name: "nr" })
  nr: number;

  @Column("date", { name: "datum", nullable: true })
  datum: string | null;

  @Column("varchar", { name: "bezeichnung", nullable: true, length: 60 })
  bezeichnung: string | null;

  @Column("int", { name: "person", nullable: true })
  person: number | null;

  @Column("double", { name: "betrag", nullable: true, precision: 22 })
  betrag: number | null;
}
