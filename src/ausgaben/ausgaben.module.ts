import { Module } from '@nestjs/common';
import { AusgabenService } from './ausgaben.service';
import { AusgabenController } from './ausgaben.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ausgaben } from 'src/entities/Ausgaben';
import { Familienmitglied } from 'src/entities/Familienmitglied';
import { Produktgruppe } from 'src/entities/Produktgruppe';

@Module({
  imports: [TypeOrmModule.forFeature([Ausgaben, Produktgruppe])],
  providers: [AusgabenService],
  controllers: [AusgabenController]
})
export class AusgabenModule {}
