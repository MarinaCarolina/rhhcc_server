import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RacingClub } from './racing-club.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RacingClubService {
  constructor(
    @InjectRepository(RacingClub)
    private readonly racingClubRepository: Repository<RacingClub>,
  ) {}

  findAll(): Promise<RacingClub[]> {
    return this.racingClubRepository.find();
  }

  findOne(id: string): Promise<RacingClub> {
    return this.racingClubRepository.findOneBy({ id });
  }

  create(racingClub: RacingClub): Promise<RacingClub> {
    return this.racingClubRepository.save(racingClub);
  }

  async remove(id: string): Promise<void> {
    await this.racingClubRepository.delete(id);
  }
}
