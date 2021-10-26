import { IsNotEmpty } from "class-validator"

export class NewProduktgruppeDto {
    @IsNotEmpty()
    bezeichnung: string
    essen: boolean
}