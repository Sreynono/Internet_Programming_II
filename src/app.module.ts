import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecieptsModule } from './reciepts/reciepts.module';
import { Receipt } from './database/entities/receipts.entity';
import { NotificationsService } from './notifications/notifications.service';
import { NotificationsModule } from './notifications/notifications.module';
import { OrdersModule } from './orders/orders.module';
import { CoreModule } from 'src/core/core.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: '123',
      database: 'tp2',
      autoLoadEntities: true,
      synchronize: true,
      
    }),
    RecieptsModule,
    NotificationsModule,
    OrdersModule,
    CoreModule,
  ],
  controllers: [AppController],
  providers: [AppService, NotificationsService],
})
export class AppModule {}
