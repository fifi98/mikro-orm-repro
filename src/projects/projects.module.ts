import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

import { ItemsModule } from '../items/items.module';
import { Project } from './project.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Project]), ItemsModule],
})
export class ProjectsModule {}
