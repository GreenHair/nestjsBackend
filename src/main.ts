import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { Logger } from '@nestjs/common';
import { getDbConnectionOptions, runDbMigrations } from './shared/utils';
import { AuthGuard } from './auth/auth.guard';
import { Container } from 'typedi';
import { useContainer, Validator } from 'class-validator';
import 'reflect-metadata';
import { LadenModule } from './laden/laden.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const port = process.env.PORT;

async function bootstrap() {
    const app = await NestFactory.create(AppModule.forRoot(await
        getDbConnectionOptions(process.env.NODE_ENV)),
    );

    useContainer(app.select(LadenModule), { fallbackOnErrors: true });

    app.enableCors()
    /**
    * Run DB migrations
    */
    //await runDbMigrations();

    const reflector = app.get(Reflector);
    app.useGlobalGuards(new AuthGuard(reflector));

    const config = new DocumentBuilder()
        .setTitle('Haushaltsbuch API')
        .setDescription('The Haushaltsbuch API description')
        .setVersion('0.0.1')
        .addTag('haushalt')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);

    await app.listen(port);

    Logger.log(`Server started running on http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
