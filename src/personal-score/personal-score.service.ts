import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonalScore } from './personal-score.entity';

@Injectable()
export class PersonalScoreService {
  constructor(
    @InjectRepository(PersonalScore)
    private readonly personalScoreRepository: Repository<PersonalScore>,
  ) {}

  findAll(): Promise<PersonalScore[]> {
    return this.personalScoreRepository.find();
  }

  findOne(id: number): Promise<PersonalScore> {
    return this.personalScoreRepository.findOneBy({ id });
  }

  create(personalScore: PersonalScore): Promise<PersonalScore> {
    return this.personalScoreRepository.save(personalScore);
  }

  async remove(id: number): Promise<void> {
    await this.personalScoreRepository.delete(id);
  }
}
