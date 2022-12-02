import { Collection, Entity, OneToMany, Property } from '@mikro-orm/core';

import { SerialNumber } from './serial-number.entity';
import { BaseEntity } from './base.entity';

@Entity()
export class Item extends BaseEntity {
  @Property()
  name: string;

  @Property()
  number: string;

  @OneToMany(() => SerialNumber, (serialNumber) => serialNumber.item)
  serialNumbers = new Collection<SerialNumber>(this);
}
