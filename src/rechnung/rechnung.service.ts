import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rechnung } from 'src/entities/Rechnung';
import { Repository } from 'typeorm';
import { NewRechnungDto } from './dto/newRechnungDto';
import { RechnungDto } from './dto/rechnungDto';

@Injectable()
export class RechnungService {
    constructor(@InjectRepository(Rechnung) private readonly repo: Repository<Rechnung>) {}

    async getone(id: number): Promise<Rechnung> {
        const ausgabe = await this.repo.findOne(id, {relations: ["ausgaben"] })

        if(!ausgabe) {
            throw new HttpException("Rechnung nicht gefunden",
            HttpStatus.NOT_FOUND)
        }

        return ausgabe
    }

    async getAll(): Promise<Rechnung[]> {
        const list = await this.repo.find({ relations: ["laden", "person", "ausgaben"] })
        return list
    }

    async create(newRechnungDto: NewRechnungDto): Promise<Rechnung> {
        
        let rechnung =  await this.repo.create(newRechnungDto)
        return this.repo.save(rechnung)
    }

    async update(id: number, RechnungDto: RechnungDto): Promise<Rechnung> {
        let rechnung = await this.getone(id)
        rechnung.datum = RechnungDto.date.toISOString()
        rechnung.einmalig = RechnungDto.einmalig
        rechnung.laden = RechnungDto.laden


        return this.repo.save(rechnung)
    }

    async remove(id: number) {
        return this.repo.delete(id)
    }
}
