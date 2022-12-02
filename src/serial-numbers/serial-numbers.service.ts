import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';

import { SerialNumber } from './serial-number.entity';

@Injectable()
export class SerialNumbersService {
  constructor(
    @InjectRepository(SerialNumber)
    private readonly serialNumberRepository: EntityRepository<SerialNumber>,
  ) {}

  async getByItem(): Promise<SerialNumber[]> {
    return this.serialNumberRepository
      .createQueryBuilder('sn')
      .select('*')
      .leftJoinAndSelect('sn.logs', 'l')
      .leftJoinAndSelect('l.step', 's')
      .getResultList();
  }
}
