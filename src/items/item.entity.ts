import {
  Collection,
  Entity,
  ManyToOne,
  OneToMany,
  Property,
} from '@mikro-orm/core';

import { SerialNumber } from '../serial-numbers/serial-number.entity';
import { BaseEntity } from '../common/base.entity';
import { Project } from '../projects/project.entity';

@Entity()
export class Item extends BaseEntity {
  @Property()
  name: string;

  @Property()
  number: string;

  @ManyToOne(() => Project)
  project: Project;

  @OneToMany(() => SerialNumber, (serialNumber) => serialNumber.item)
  serialNumbers = new Collection<SerialNumber>(this);
}
