import { Collection, Entity, OneToMany, Property } from '@mikro-orm/core';

import { BaseEntity } from '../common/base.entity';
import { Program } from '../programs/program.entity';

@Entity()
export class Customer extends BaseEntity {
  @Property()
  name: string;

  @Property()
  number: string;

  @OneToMany(() => Program, (program) => program.customer)
  programs = new Collection<Program>(this);
}
