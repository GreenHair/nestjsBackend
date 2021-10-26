import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Produktgruppe } from 'src/entities/Produktgruppe';
import { Repository } from 'typeorm';
import { NewProduktgruppeDto } from './dto/newProduktgruppeDto';
import { ProduktgruppeDto } from './dto/produktgruppeDto';

@Injectable()
export class ProduktgruppeService {
    constructor(@InjectRepository(Produktgruppe) private readonly repo: Repository<Produktgruppe>) {}

    async getone(id: number): Promise<Produktgruppe> {
        const kategorie = await this.repo.findOne(id)

        if(!kategorie) {
            throw new HttpException("Kategorie nicht gefunden",
            HttpStatus.NOT_FOUND)
        }

        return kategorie
    }

    async getAll(): Promise<Produktgruppe[]> {
        const list = await this.repo.find()
        return list
    }

    async create(newProduktgruppeDto: NewProduktgruppeDto): Promise<Produktgruppe> {
        const exists = await this.repo.find({bezeichnung: newProduktgruppeDto.bezeichnung})
        if(exists.length > 0) {
            throw new HttpException(
                "Kategorie ist schon vorhanden",
                HttpStatus.BAD_REQUEST
            )
        }
        let kategorie =  await this.repo.create(newProduktgruppeDto)
        return this.repo.save(kategorie)
    }

    async update(id: number, produktgruppeDto: ProduktgruppeDto): Promise<Produktgruppe> {
        let kategorie = await this.getone(id)
        kategorie.bezeichnung = produktgruppeDto.bezeichnung
        kategorie.essen = produktgruppeDto.essen
        return this.repo.save(kategorie)
    }

    async remove(id: number) {
        return this.repo.delete(id)
    }
}
