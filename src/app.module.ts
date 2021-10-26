import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LadenModule } from './laden/laden.module';
import { RechnungModule } from './rechnung/rechnung.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProduktgruppeController } from './produktgruppe/produktgruppe.controller';
import { ProduktgruppeModule } from './produktgruppe/produktgruppe.module';

@Module({
  imports: [RechnungModule, UserModule, AuthModule, ProduktgruppeModule]
})
export class AppModule {
    static forRoot(
    connOptions: ConnectionOptions): DynamicModule {
        return {
        module: AppModule,
        controllers: [
          AppController
        ],
        imports: [
          LadenModule, 
          RechnungModule, 
          ProduktgruppeModule, 
          TypeOrmModule.forRoot(connOptions)],
        providers: [AppService],
        };
    }
}

