import { EntityManager } from '@mikro-orm/postgresql';
import { Controller, Get } from '@nestjs/common';

import { SerialNumber } from '../entities/serial-number.entity';

@Controller('items')
export class SerialNumbersController {
  constructor(private em: EntityManager) {}

  @Get(':itemId/serial-numbers')
  getSerialNumber() {
    return this.em
      .getRepository(SerialNumber)
      .createQueryBuilder('sn')
      .select('*')
      .leftJoinAndSelect('sn.logs', 'l')
      .leftJoinAndSelect('l.step', 's')
      .getResultList();
  }
}
