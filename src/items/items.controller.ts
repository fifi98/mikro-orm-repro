import { Controller, Get, Param } from '@nestjs/common';

import { SerialNumbersService } from '../serial-numbers/serial-numbers.service';

@Controller('items')
export class ItemsController {
  constructor(private serialNumbersService: SerialNumbersService) {}

  @Get(':itemId/serial-numbers')
  getSerialNumber(@Param('itemId') itemId: string) {
    return this.serialNumbersService.getByItem();
  }
}
