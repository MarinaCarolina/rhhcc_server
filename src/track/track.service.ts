import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Track } from './track.entity';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import {
  AnalyticsService,
  IAnalytics,
} from '../utils/analytics/analytics.service';

@Injectable()
export class TrackService {
  constructor(
    @InjectRepository(Track)
    private readonly trackRepository: Repository<Track>,
    private readonly analyticsService: AnalyticsService,
  ) {}

  findAll(): Promise<IAnalytics<Track[]>> {
    return this.analyticsService.provide<Track[]>(
      {
        successMessage: 'Все трассы успешно получены',
        failureMessage: 'Не удалось получить трассы',
        id: 'findAllTracks',
      },
      async () => {
        return this.trackRepository.find();
      },
    );
  }

  findOne(id: string): Promise<IAnalytics<Track | null>> {
    return this.analyticsService.provide(
      {
        successMessage: `Трасса с ID ${id} успешно получена`,
        failureMessage: `Трасса с ID ${id} не найдена`,
        id: 'findTrackById',
      },
      async () => {
        const track = await this.trackRepository.findOneBy({ id });
        if (!track) throw new Error(`Трасса с ID ${id} не найдена`);
        return track;
      },
    );
  }

  create(createTrackDto: CreateTrackDto): Promise<IAnalytics<Track>> {
    return this.analyticsService.provide(
      {
        successMessage: 'Трасса успешно создана',
        failureMessage: 'Не удалось создать трассу',
        id: 'createTrack',
      },
      async () => {
        const track = this.trackRepository.create(createTrackDto);
        return this.trackRepository.save(track);
      },
    );
  }

  update(
    id: string,
    updateTrackDto: UpdateTrackDto,
  ): Promise<IAnalytics<Track | null>> {
    return this.analyticsService.provide(
      {
        successMessage: `Трасса с ID ${id} успешно обновлена`,
        failureMessage: `Не удалось обновить трассу с ID ${id}`,
        id: 'updateTrack',
      },
      async () => {
        const result = await this.trackRepository.update(id, updateTrackDto);
        if (result.affected === 0)
          throw new Error(`Трасса с ID ${id} не найдена`);
        return this.trackRepository.findOneBy({ id });
      },
    );
  }

  remove(id: string): Promise<IAnalytics<void>> {
    return this.analyticsService.provide(
      {
        successMessage: `Трасса с ID ${id} успешно удалена`,
        failureMessage: `Не удалось удалить трассу с ID ${id}`,
        id: 'deleteTrack',
      },
      async () => {
        const result = await this.trackRepository.delete(id);
        if (result.affected === 0)
          throw new Error(`Трасса с ID ${id} не найдена`);
      },
    );
  }
}
