import {
  Collection,
  Entity,
  ManyToOne,
  OneToMany,
  Property,
} from '@mikro-orm/core';

import { BaseEntity } from '../common/base.entity';
import { Customer } from '../customers/customer.entity';
import { Project } from '../projects/project.entity';

@Entity()
export class Program extends BaseEntity {
  @ManyToOne(() => Customer)
  customer: Customer;

  @Property()
  name: string;

  @Property()
  number: string;

  @OneToMany(() => Project, (project) => project.program)
  projects = new Collection<Project>(this);
}
