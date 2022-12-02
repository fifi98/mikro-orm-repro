import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

import { StepsModule } from '../steps/steps.module';
import { Log } from './log.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Log]), StepsModule],
})
export class LogsModule {}
