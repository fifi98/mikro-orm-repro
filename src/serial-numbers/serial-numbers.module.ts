import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

import { SerialNumbersService } from './serial-numbers.service';
import { SerialNumber } from '../entities/serial-number.entity';
import { SerialNumbersController } from './serial-numbers.controller';

@Module({
  imports: [MikroOrmModule.forFeature([SerialNumber])],
  providers: [SerialNumbersService],
  exports: [SerialNumbersService],
  controllers: [SerialNumbersController],
})
export class SerialNumbersModule {}
