import { Module, forwardRef } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { NotificationsModule } from 'src/notifications/notifications.module';
import { OrdersController } from './orders.controller';

@Module({
  imports: [forwardRef(() => NotificationsModule)],
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [OrdersService],
})
export class OrdersModule {}