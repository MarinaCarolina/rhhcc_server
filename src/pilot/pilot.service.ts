import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pilot } from './pilot.entity';

@Injectable()
export class PilotService {
  constructor(
    @InjectRepository(Pilot)
    private readonly pilotRepository: Repository<Pilot>,
  ) {}

  findAll(): Promise<Pilot[]> {
    return this.pilotRepository.find();
  }

  findOne(id: string): Promise<Pilot> {
    return this.pilotRepository.findOneBy({ id });
  }

  create(pilot: Pilot): Promise<Pilot> {
    return this.pilotRepository.save(pilot);
  }

  async remove(id: string): Promise<void> {
    await this.pilotRepository.delete(id);
  }
}
