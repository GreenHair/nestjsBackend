import { IsNotEmpty } from "class-validator"

export class LadenDto {
    @IsNotEmpty()
    id: number
    @IsNotEmpty()
    name: string
    online: boolean
}