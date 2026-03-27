import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecieptsModule } from './reciepts/reciepts.module';
import { Receipt } from './database/entities/receipts.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'tp2_db',
      entities: [Receipt],
      synchronize: process.env.NODE_ENV !== 'production',
    }),
    RecieptsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
