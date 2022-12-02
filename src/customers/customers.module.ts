import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

import { ProgramsModule } from '../programs/programs.module';
import { Customer } from './customer.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Customer]), ProgramsModule],
})
export class CustomersModule {}
