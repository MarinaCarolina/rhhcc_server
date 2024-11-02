import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Result } from './result.entity';

@Injectable()
export class ResultService {
  constructor(
    @InjectRepository(Result)
    private readonly resultRepository: Repository<Result>,
  ) {}

  findAll(): Promise<Result[]> {
    return this.resultRepository.find();
  }

  findOne(id: string): Promise<Result> {
    return this.resultRepository.findOneBy({ id });
  }

  create(result: Result): Promise<Result> {
    return this.resultRepository.save(result);
  }

  async remove(id: string): Promise<void> {
    await this.resultRepository.delete(id);
  }
}
