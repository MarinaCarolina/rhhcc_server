import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Stage } from '../stage/stage.entity';

@Entity()
export class Track {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column('float')
  lap_length: number;

  @Column({ nullable: true })
  best_result: number; // Вычисляемое поле

  @OneToMany(() => Stage, (stage) => stage.track)
  stages: Stage[];
}
