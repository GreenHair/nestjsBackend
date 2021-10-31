import { IsDate, IsIn, IsNotEmpty, IsOptional, ValidateIf } from "class-validator";
import { Ausgaben } from "src/entities/Ausgaben";
import { Familienmitglied } from "src/entities/Familienmitglied";
import { Laden } from "src/entities/Laden";

export class NewRechnungDto {
    @IsNotEmpty()
    laden: Laden
    
    @IsNotEmpty()
    @IsDate()
    date: Date

    @IsOptional()
    @IsIn([0,1])
    @ValidateIf(val => val != null)
    einmalig: number

    @IsNotEmpty()
    person: Familienmitglied

    @IsNotEmpty()
    posten: Ausgaben[]
}