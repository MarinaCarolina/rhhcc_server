import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Tyre {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tire_model: string;

  @Column('float')
  tire_width: number;

  @Column('float')
  tire_diameter: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
