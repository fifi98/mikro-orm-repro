import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

import { SerialNumbersService } from './serial-numbers.service';
import { SerialNumber } from './serial-number.entity';
import { LogsModule } from '../logs/logs.module';

@Module({
  imports: [MikroOrmModule.forFeature([SerialNumber]), LogsModule],
  providers: [SerialNumbersService],
  exports: [SerialNumbersService],
})
export class SerialNumbersModule {}
