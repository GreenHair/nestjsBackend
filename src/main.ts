import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { Logger } from '@nestjs/common';
import { getDbConnectionOptions, runDbMigrations } from './shared/utils';
import { getConnection } from 'typeorm';
import { AuthGuard } from './auth/auth.guard';

const port = process.env.PORT;

async function bootstrap() {  
    const app = await NestFactory.create(AppModule.forRoot(await
        getDbConnectionOptions(process.env.NODE_ENV)),
    );

    /**
    * Run DB migrations
    */
    //await runDbMigrations();
   
    const reflector = app.get(Reflector);
    app.useGlobalGuards(new AuthGuard(reflector));
    
    await app.listen(port);
    
    Logger.log(`Server started running on http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
