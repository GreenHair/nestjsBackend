import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Laden } from 'src/entities/Laden';
import { toPromise } from 'src/shared/utils';
import { Repository } from 'typeorm';
import { LadenDto } from './dto/ladenDto';
import { NewLadenDto } from './dto/newLadenDto';

@Injectable()
export class LadenService {
    constructor(@InjectRepository(Laden) private readonly ladenRepo: Repository<Laden>) {}
    
    async getOne(id: number): Promise<Laden> {
        const laden = await this.ladenRepo.findOne(id)

        if(!laden) {
            throw new HttpException(
            "Der Laden wurde nicht gefunden",
            HttpStatus.NOT_FOUND
            )
        }

        return laden
    }

    async getAll(): Promise<Laden[]> {
        const ladenList = await this.ladenRepo.find()

        return ladenList
    }

    async create(newLadenDto: NewLadenDto) : Promise<LadenDto> {
        let laden = await this.ladenRepo.create(newLadenDto)
        return this.ladenRepo.save(laden)
    }
}
