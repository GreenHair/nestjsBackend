import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { toEntityDto } from 'src/shared/mapper';
import { RechnungService } from './rechnung.service';

@Controller('rechnung')
export class RechnungController {
    constructor(private service: RechnungService) {}

    /* @Get()
    async getAll(): Promise<LadenDto[]> {
        const list = await this.service.getAll()
        return toEntityDto([], list)
    }

    @Get(":id")
    async getOne(@Param("id") id: number): Promise<LadenDto>　{
        const rechnung = await this.service.getOne(id)
        return toEntityDto(new LadenDto(),rechnung)
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() laden: NewLadenDto): Promise<number> {
        const newLaden = this.service.create(laden)
        return toEntityDto(new LadenDto(), newLaden)
    }

    @Put("id")
    @UsePipes(new ValidationPipe())
    async update(@Param("id") id: number, @Body() laden: LadenDto) {

    }

    @Delete("id")
    async delete(@Param("id") id: number) {
        
    } */
}
