import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

import { SerialNumber } from '../entities/serial-number.entity';
import { SerialNumbersController } from './serial-numbers.controller';

@Module({
  imports: [MikroOrmModule.forFeature([SerialNumber])],
  controllers: [SerialNumbersController],
})
export class SerialNumbersModule {}
