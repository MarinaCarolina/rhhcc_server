import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Track } from '../track/track.entity';

@Entity()
export class Stage {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  date: Date;

  @Column()
  year: number;

  @Column()
  configuration: string;

  @ManyToOne(() => Track, (track) => track.stages)
  track: Track;
}
