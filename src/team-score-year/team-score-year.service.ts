import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeamScoreYear } from './team-score-year.entity';

@Injectable()
export class TeamScoreYearService {
  constructor(
    @InjectRepository(TeamScoreYear)
    private readonly teamScoreYearRepository: Repository<TeamScoreYear>,
  ) {}

  findAll(): Promise<TeamScoreYear[]> {
    return this.teamScoreYearRepository.find();
  }

  findOne(id: string): Promise<TeamScoreYear> {
    return this.teamScoreYearRepository.findOneBy({ id });
  }

  create(teamScoreYear: TeamScoreYear): Promise<TeamScoreYear> {
    return this.teamScoreYearRepository.save(teamScoreYear);
  }

  async remove(id: string): Promise<void> {
    await this.teamScoreYearRepository.delete(id);
  }
}
