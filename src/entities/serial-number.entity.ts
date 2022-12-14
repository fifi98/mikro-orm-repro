import {
  Collection,
  Entity,
  ManyToOne,
  OneToMany,
  Property,
} from '@mikro-orm/core';

import { BaseEntity } from './base.entity';
import { Log } from './log.entity';

@Entity()
export class SerialNumber extends BaseEntity {
  @Property()
  serialNumber: number;

  @OneToMany(() => Log, (log) => log.serialNumber)
  logs = new Collection<Log>(this);
}
