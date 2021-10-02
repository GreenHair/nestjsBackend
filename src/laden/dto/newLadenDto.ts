import { IsNotEmpty } from "class-validator"

export class NewLadenDto {
    @IsNotEmpty()
    name: string
    online: boolean
}