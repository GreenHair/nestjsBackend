import { Transform, Type } from "class-transformer";
import { IsDate, IsIn, IsNotEmpty, IsOptional, ValidateIf } from "class-validator";
import { Ausgaben } from "src/entities/Ausgaben";
import { Familienmitglied } from "src/entities/Familienmitglied";
import { Laden } from "src/entities/Laden";
import { FamilienmitgliedDto } from "src/familienmitglied/dto/familienmitgliedDto";
import { LadenDto } from "src/laden/dto/ladenDto";

export class NewRechnungDto {
    @Type(() => LadenDto)
    @IsNotEmpty()
    laden: LadenDto
    
    @Type(() => Date)
    @IsNotEmpty()
    @IsDate()
    datum: Date

    @IsOptional()
    @IsIn([0,1])
    @ValidateIf(val => val != null)
    einmalig: number

    @Type((() => FamilienmitgliedDto))
    @IsNotEmpty()
    person: FamilienmitgliedDto

    @IsNotEmpty()
    ausgaben: Ausgaben[]
}