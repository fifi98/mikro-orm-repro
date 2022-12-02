import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { SerialNumbersModule } from './serial-numbers/serial-numbers.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MikroOrmModule.forRoot(),
    SerialNumbersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
