import { DateType, Entity, ManyToOne, Property } from '@mikro-orm/core';

import { SerialNumber } from '../serial-numbers/serial-number.entity';
import { BaseEntity } from '../common/base.entity';
import { Step } from '../steps/step.entity';

@Entity()
export class Log extends BaseEntity {
  @ManyToOne(() => SerialNumber)
  serialNumber: SerialNumber;

  @ManyToOne()
  step: Step;

  @Property({ type: DateType, nullable: true })
  operationDate: Date;

  @Property({ default: false })
  current: boolean;

  @Property({ default: false })
  returned: boolean;
}
