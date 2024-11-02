import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Stage } from './stage.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StageService {
  constructor(
    @InjectRepository(Stage)
    private readonly stageRepository: Repository<Stage>,
  ) {}

  findAll(): Promise<Stage[]> {
    return this.stageRepository.find({ relations: ['track'] });
  }

  findOne(id: string): Promise<Stage> {
    return this.stageRepository.findOne({
      where: { id },
      relations: ['track'],
    });
  }

  create(stage: Stage): Promise<Stage> {
    return this.stageRepository.save(stage);
  }

  async remove(id: string): Promise<void> {
    await this.stageRepository.delete(id);
  }
}
