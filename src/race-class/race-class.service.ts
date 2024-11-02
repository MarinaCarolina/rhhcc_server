import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RaceClass } from './race-class.entity';

@Injectable()
export class RaceClassService {
  constructor(
    @InjectRepository(RaceClass)
    private readonly raceClassRepository: Repository<RaceClass>,
  ) {}

  findAll(): Promise<RaceClass[]> {
    return this.raceClassRepository.find();
  }

  findOne(id: string): Promise<RaceClass> {
    return this.raceClassRepository.findOneBy({ id });
  }

  create(raceClass: RaceClass): Promise<RaceClass> {
    return this.raceClassRepository.save(raceClass);
  }

  async remove(id: string): Promise<void> {
    await this.raceClassRepository.delete(id);
  }
}
