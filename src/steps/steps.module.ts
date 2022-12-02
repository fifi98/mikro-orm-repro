import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { Step } from './step.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Step])],
})
export class StepsModule {}
