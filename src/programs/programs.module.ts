import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { ProjectsModule } from '../projects/projects.module';
import { Program } from './program.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Program]), ProjectsModule],
})
export class ProgramsModule {}
