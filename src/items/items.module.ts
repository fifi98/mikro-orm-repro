import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

import { SerialNumbersModule } from '../serial-numbers/serial-numbers.module';
import { ItemsController } from './items.controller';
import { Item } from './item.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Item]), SerialNumbersModule],
  controllers: [ItemsController],
})
export class ItemsModule {}
