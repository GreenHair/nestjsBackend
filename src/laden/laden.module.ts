import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Laden } from 'src/entities/Laden';
import { LadenController } from './laden.controller';
import { LadenService } from './laden.service';

@Module({
  imports:[TypeOrmModule.forFeature([Laden])],
  controllers: [LadenController],
  providers: [LadenService]
})
export class LadenModule {}
