import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produktgruppe } from 'src/entities/Produktgruppe';
import { ProduktgruppeController } from './produktgruppe.controller';
import { ProduktgruppeService } from './produktgruppe.service';

@Module({
  imports: [TypeOrmModule.forFeature([Produktgruppe])],
  controllers: [ProduktgruppeController],
  providers: [ProduktgruppeService]
})
export class ProduktgruppeModule {}
