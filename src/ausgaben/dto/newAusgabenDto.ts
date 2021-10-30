import { IsNotEmpty, IsNumber } from "class-validator"
import { Produktgruppe } from "src/entities/Produktgruppe"
import { ProduktgruppeDto } from "src/produktgruppe/dto/produktgruppeDto"

export class NewAusgabenDto {
    @IsNotEmpty()
    bezeichnung: string
    @IsNotEmpty()
    @IsNumber()
    betrag: number
    @IsNotEmpty()
    prodGr: Produktgruppe
}