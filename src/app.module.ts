import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LadenModule } from './laden/laden.module';
import { RechnungModule } from './rechnung/rechnung.module';

@Module({
  imports: [RechnungModule]
})
export class AppModule {
    static forRoot(
    connOptions: ConnectionOptions): DynamicModule {
        return {
        module: AppModule,
        controllers: [AppController],
        imports: [LadenModule, TypeOrmModule.forRoot(connOptions)],
        providers: [AppService],
        };
    }
}

