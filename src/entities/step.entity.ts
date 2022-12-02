import { Entity, Enum, Property } from '@mikro-orm/core';

import { BaseEntity } from './base.entity';

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
}

export enum StepType {
  ASSY = 'ASSY',
  INSP = 'INSP',
  TEST = 'TEST',
  PTG = 'PTG',
}
