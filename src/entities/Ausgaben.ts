import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produktgruppe } from "./Produktgruppe";

@Entity("ausgaben", { schema: "haushaltsbuch" })
export class Ausgaben {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "bezeichnung", nullable: true, length: 60 })
  bezeichnung: string | null;

  @Column("double", {
    name: "betrag",
    nullable: true,
    precision: 22,
    default: () => "'0'",
  })
  betrag: number | null;

  @Column("int", { name: "prod_gr", nullable: true })
  @ManyToOne(type => Produktgruppe, produktgruppe => produktgruppe.id)
  @JoinColumn({ name: "prod_gr", referencedColumnName: "id" })
  prodGr: Produktgruppe;

  @Column("int", { name: "rechnungsnr", nullable: true })
  rechnungsnr: number | null;
}
