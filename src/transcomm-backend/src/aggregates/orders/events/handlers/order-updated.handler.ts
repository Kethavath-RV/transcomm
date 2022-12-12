import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { AggregateRepository } from 'event-sourcing';
import { OrderUpdatedEvent } from '../impl/order-updated.event';
import { OrderAggregate } from 'aggregates/orders/order-aggregate';
import { ViewsService } from 'aggregates/orders/views/views.service';

@EventsHandler(OrderUpdatedEvent)
export class OrderUpdatedHandler implements IEventHandler<OrderUpdatedEvent> {
  constructor(
    private readonly repository: AggregateRepository,
    private readonly viewService: ViewsService
  ) { }

  private logger = new Logger(this.constructor.name);
  async handle(event: OrderUpdatedEvent): Promise<void> {
    this.logger.debug(JSON.stringify(event));

    const aggregateId = event.aggregateId;
    const orderAggregate = await this.repository.getById(
      OrderAggregate,
      'order',
      aggregateId,
    );
    if (!orderAggregate) {
      throw Error('No orderaggregate found for orderId: ' + aggregateId);
    }


    await this.viewService.HydrateViews(orderAggregate);
    this.logger.log('Order updated');
  }
}
