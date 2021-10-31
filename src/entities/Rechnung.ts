import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Ausgaben } from "./Ausgaben";
import { Familienmitglied } from "./Familienmitglied";
import { Laden } from "./Laden";

@Entity("rechnung", { schema: "haushaltsbuch" })
export class Rechnung {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @ManyToOne(type => Laden, laden => laden.id)
  @JoinColumn({name: "laden"})
  @Column("int", { name: "laden", nullable: true })
  laden: Laden

  @Column("date", { name: "datum", nullable: true })
  datum: string | null;

  @Column("int", { name: "einmalig", nullable: true })
  einmalig: number | null;

  @ManyToOne(type => Familienmitglied, familienmitglied => familienmitglied.id)
  @JoinColumn({name: "person"})
  @Column("int", { name: "person", nullable: true })
  person: Familienmitglied;

  @OneToMany(type => Ausgaben, ausgaben => ausgaben.rechnungsnr)
  //@JoinColumn({name: "rechnungsnr"})
  ausgaben: Ausgaben[]
}
