import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { AppConfig, AppConfigValidationSchema } from './app.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesGuard } from './guards/roles.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Media } from './routes/media/entity/media.entity';
import { MediaModule } from './routes/media/media.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: AppConfig.DB_HOST,
      port: AppConfig.DB_PORT,
      username: AppConfig.DB_USER,
      password: AppConfig.DB_PASSWORD,
      database: AppConfig.DB_NAME,
      entities: [Media],
      synchronize: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: AppConfigValidationSchema
    }),
    
    ThrottlerModule.forRoot({
      ttl: AppConfig.TTL,
      limit: AppConfig.LIMIT,
    }),
    
    MediaModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard
    }
  ],
})


export class AppModule  implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply()
      .exclude()
      .forRoutes('*');
  }
}
