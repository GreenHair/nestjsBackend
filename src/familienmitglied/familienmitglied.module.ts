import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Familienmitglied } from 'src/entities/Familienmitglied';
import { FamilienmitgliedController } from './familienmitglied.controller';
import { FamilienmitgliedService } from './familienmitglied.service';

@Module({
    imports: [TypeOrmModule.forFeature([Familienmitglied])],
    controllers: [FamilienmitgliedController],
    providers: [FamilienmitgliedService]
})
export class FamilienmitgliedModule {}
