import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Pilot } from '../pilot/pilot.entity';

@Entity()
export class RacingClub {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Pilot, (pilot) => pilot.club)
  pilots: Pilot[];
}
