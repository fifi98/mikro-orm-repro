import {
  Collection,
  Entity,
  Enum,
  ManyToMany,
  Property,
} from '@mikro-orm/core';

import { BaseEntity } from '../common/base.entity';
import { Operator } from '../operators/operator.entity';

@Entity()
export class Step extends BaseEntity {
  @Property()
  name: string;

  @Property()
  number: string;

  @Property()
  order: number;

  @Enum(() => StepType)
  type: StepType;

  @ManyToMany({ entity: () => Operator, eager: true })
  operators = new Collection<Operator>(this);
}

export enum StepType {
  ASSY = 'ASSY',
  INSP = 'INSP',
  TEST = 'TEST',
  PTG = 'PTG',
}
