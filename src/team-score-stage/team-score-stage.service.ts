import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeamScoreStage } from './team-score-stage.entity';

@Injectable()
export class TeamScoreStageService {
  constructor(
    @InjectRepository(TeamScoreStage)
    private readonly teamScoreStageRepository: Repository<TeamScoreStage>,
  ) {}

  findAll(): Promise<TeamScoreStage[]> {
    return this.teamScoreStageRepository.find();
  }

  findOne(id: string): Promise<TeamScoreStage> {
    return this.teamScoreStageRepository.findOneBy({ id });
  }

  create(teamScoreStage: TeamScoreStage): Promise<TeamScoreStage> {
    return this.teamScoreStageRepository.save(teamScoreStage);
  }

  async remove(id: string): Promise<void> {
    await this.teamScoreStageRepository.delete(id);
  }
}
