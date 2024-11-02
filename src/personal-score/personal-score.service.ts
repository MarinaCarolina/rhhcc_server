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

  findOne(id: string): Promise<PersonalScore> {
    return this.personalScoreRepository.findOneBy({ id });
  }

  create(personalScore: PersonalScore): Promise<PersonalScore> {
    return this.personalScoreRepository.save(personalScore);
  }

  async remove(id: string): Promise<void> {
    await this.personalScoreRepository.delete(id);
  }
}
