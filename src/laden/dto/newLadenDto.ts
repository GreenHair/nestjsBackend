import { IsNotEmpty } from "class-validator"
import { IsUniqueLaden } from "src/laden/isuniqueladen.decorator"

export class NewLadenDto {
    @IsNotEmpty()
    @IsUniqueLaden({message: "Laden schon vorhanden"})
    name: string
    online: boolean
}