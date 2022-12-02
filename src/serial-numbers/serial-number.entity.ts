import {
  Collection,
  Entity,
  ManyToOne,
  OneToMany,
  Property,
} from '@mikro-orm/core';

import { BaseEntity } from '../common/base.entity';
import { Item } from '../items/item.entity';
import { Log } from '../logs/log.entity';

@Entity()
export class SerialNumber extends BaseEntity {
  @Property()
  serialNumber: number;

  @ManyToOne(() => Item)
  item: Item;

  @OneToMany(() => Log, (log) => log.serialNumber)
  logs = new Collection<Log>(this);
}
