import { Collection, Entity, ManyToMany, Property } from '@mikro-orm/core';

import { BaseEntity } from '../common/base.entity';
import { Step } from '../steps/step.entity';

@Entity()
export class Operator extends BaseEntity {
  @Property()
  firstName: string;

  @Property()
  lastName: string;

  @Property()
  email: string;

  @Property()
  number: string;

  @Property({ nullable: true, hidden: true })
  pin: string;

  @ManyToMany(() => Step, (step) => step.operators)
  steps = new Collection<Step>(this);
}
