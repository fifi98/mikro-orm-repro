import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

import { Operator } from './operator.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Operator])],
})
export class OperatorsModule {}
