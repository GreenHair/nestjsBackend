import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Einkommen } from 'src/entities/Einkommen';
import { Repository } from 'typeorm';
import { NewEinkommenDto } from './dto/newEinkommenDto';
import { EinkommenDto } from './dto/einkommenDto';

@Injectable()
export class EinkommenService {
    constructor(@InjectRepository(Einkommen) private readonly repo: Repository<Einkommen>) {}

    async getone(id: number): Promise<Einkommen> {
        const einkommen = await this.repo.findOne(id)

        if(!einkommen) {
            throw new HttpException("Einkommen nicht gefunden",
            HttpStatus.NOT_FOUND)
        }

        return einkommen
    }

    async getAll(query?: any): Promise<Einkommen[]> {
        const {year, month, week} = query
        let selectQuery = this.repo.createQueryBuilder('einkommen')
        .leftJoinAndSelect("einkommen.person", "familienmtglied")
        
        if(query.year) {
            selectQuery = selectQuery.where(`YEAR(einkommen.datum) = ${year}`)
        }
        if(query.month){
            selectQuery = selectQuery.andWhere(`MONTH(einkommen.datum) = ${month}`)
        }
        if(query.week) {
            selectQuery = selectQuery.andWhere(`WEEK(einkommen.datum) = ${week}`)
        }
        
        const list = await selectQuery.getMany()
        return list
    }

    async create(newEinkommenDto: NewEinkommenDto): Promise<Einkommen> {
        
        return this.repo.save(newEinkommenDto)
    }

    async update(id: number, EinkommenDto: EinkommenDto): Promise<Einkommen> {
        let einkommen = await this.getone(id)
        einkommen.datum = EinkommenDto.datum
        einkommen.person = EinkommenDto.person

        return this.repo.save(einkommen)
    }

    async remove(id: number) {
        return this.repo.delete(id)
    }
}
