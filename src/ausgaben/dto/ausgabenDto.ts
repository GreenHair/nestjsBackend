import { IsNotEmpty, IsNumber } from "class-validator"
import { ProduktgruppeDto } from "src/produktgruppe/dto/produktgruppeDto"

export class AusgabenDto {
    @IsNotEmpty()
    id: number
    @IsNotEmpty()
    bezeichnung: string
    @IsNotEmpty()
    @IsNumber()
    betrag: number
    @IsNotEmpty()
    prodGr: ProduktgruppeDto
    @IsNotEmpty()
    rechnungsnr: number
}