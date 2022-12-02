import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { SerialNumbersModule } from './serial-numbers/serial-numbers.module';
import { OperatorsModule } from './operators/operators.module';
import { CustomersModule } from './customers/customers.module';
import { ProgramsModule } from './programs/programs.module';
import { ProjectsModule } from './projects/projects.module';
import { StepsModule } from './steps/steps.module';
import { ItemsModule } from './items/items.module';
import { LogsModule } from './logs/logs.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MikroOrmModule.forRoot(),
    CustomersModule,
    ProgramsModule,
    ProjectsModule,
    StepsModule,
    OperatorsModule,
    ItemsModule,
    SerialNumbersModule,
    LogsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
