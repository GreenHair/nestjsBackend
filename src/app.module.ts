import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LadenModule } from './laden/laden.module';

@Module({
  imports: [LadenModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
