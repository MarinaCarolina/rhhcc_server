import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Check,
} from 'typeorm';

@Entity()
@Check(`"tire_width" > 0 AND "tire_ratio" > 0 AND "tire_diameter" > 0`)
export class Tyre {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tire_brand: string;

  @Column()
  tire_model: string;

  @Column('int')
  tire_width: number;

  @Column('int')
  tire_ratio: number;

  @Column('int')
  tire_diameter: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
