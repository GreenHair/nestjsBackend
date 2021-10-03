import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Laden } from 'src/entities/Laden';
import { Ausgaben } from 'src/entities/Ausgaben';
import { Familienmitglied } from 'src/entities/Familienmitglied';
import { Rechnung } from 'src/entities/Rechnung';
import { RechnungController } from './rechnung.controller';
import { RechnungService } from './rechnung.service';

@Module({
  imports: [TypeOrmModule.forFeature([Rechnung, Familienmitglied, Laden, Ausgaben])],
  controllers: [RechnungController],
  providers: [RechnungService]
})
export class RechnungModule {}
