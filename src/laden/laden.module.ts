import { Module } from '@nestjs/common';
import { LadenController } from './laden.controller';
import { LadenService } from './laden.service';

@Module({
  controllers: [LadenController],
  providers: [LadenService]
})
export class LadenModule {}
