import { IsInt, IsOptional } from "class-validator";

export class RechnungQuery {
    @IsOptional()
    @IsInt()
    year: number

    @IsOptional()
    @IsInt()
    month: number
    
    @IsOptional()
    @IsInt()
    week: number
}