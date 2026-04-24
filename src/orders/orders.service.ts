import { Injectable } from '@nestjs/common';
import { NotificationsService } from 'src/notifications/notifications.service';

@Injectable()
export class OrdersService {
  constructor(
    private readonly notifications: NotificationsService, 
  ) {}

  createOrder(orderDto: any) {
    this.notifications.notify('order_created', {
      order: orderDto,
    });

    return { status: 'ok' };
  }
}