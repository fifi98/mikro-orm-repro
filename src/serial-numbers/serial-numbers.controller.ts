import { Controller, Get } from '@nestjs/common';
import { SerialNumbersService } from './serial-numbers.service';

@Controller('items')
export class SerialNumbersController {
  constructor(private serialNumbersService: SerialNumbersService) {}

  @Get(':itemId/serial-numbers')
  getSerialNumber() {
    return this.serialNumbersService.getByItem();
  }
}
