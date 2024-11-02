import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Stage } from '../stage/stage.entity';

@Entity()
export class Track {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column('float')
  lap_length: number;

  @Column('int', { nullable: true })
  best_result: number; // Вычисляемое поле

  @OneToMany(() => Stage, (stage) => stage.track)
  stages: Stage[];
}
