import {
  Collection,
  Entity,
  ManyToOne,
  OneToMany,
  Property,
} from '@mikro-orm/core';

import { BaseEntity } from '../common/base.entity';
import { Program } from '../programs/program.entity';
import { Item } from '../items/item.entity';

@Entity()
export class Project extends BaseEntity {
  @ManyToOne(() => Program)
  program: Program;

  @Property()
  name: string;

  @Property()
  number: string;

  @OneToMany(() => Item, (item) => item.project)
  items = new Collection<Item>(this);
}
