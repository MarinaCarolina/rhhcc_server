import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RaceClass } from './race-class.entity';
import {
  AnalyticsService,
  IAnalytics,
} from '../utils/analytics/analytics.service';
import { CreateRaceClassDto } from './dto/create-race-class.dto';
import { UpdateRaceClassDto } from './dto/update-race-class.dto';

@Injectable()
export class RaceClassService {
  constructor(
    @InjectRepository(RaceClass)
    private readonly raceClassRepository: Repository<RaceClass>,
    private readonly analyticsService: AnalyticsService,
  ) {}

  findAll(): Promise<IAnalytics<RaceClass[]>> {
    return this.analyticsService.provide<RaceClass[]>(
      {
        successMessage: 'Все классы успешно получены',
        failureMessage: 'Не удалось получить классы',
        id: 'findAllClasses',
      },
      async () => {
        return this.raceClassRepository.find();
      },
    );
  }

  findOne(id: string): Promise<IAnalytics<RaceClass>> {
    return this.analyticsService.provide(
      {
        successMessage: `Класс с ID ${id} успешно получен`,
        failureMessage: `Класс с ID ${id} не найден`,
        id: 'findClassById',
      },
      async () => {
        const raceClass = await this.raceClassRepository.findOneBy({ id });
        if (!raceClass) throw new Error(`Класс с ID ${id} не найден`);
        return raceClass;
      },
    );
  }

  create(
    createRaceClassDto: CreateRaceClassDto,
  ): Promise<IAnalytics<RaceClass>> {
    return this.analyticsService.provide(
      {
        successMessage: 'Класс успешно создан',
        failureMessage: 'Не удалось создать класс',
        id: 'createClass',
      },
      async () => {
        const raceClass = this.raceClassRepository.create(createRaceClassDto);
        return this.raceClassRepository.save(raceClass);
      },
    );
  }

  update(
    id: string,
    updateRaceClassDto: UpdateRaceClassDto,
  ): Promise<IAnalytics<RaceClass>> {
    return this.analyticsService.provide(
      {
        successMessage: `Класс с ID ${id} успешно обновлен`,
        failureMessage: `Не удалось обновить класс с ID ${id}`,
        id: 'updateClass',
      },
      async () => {
        const result = await this.raceClassRepository.update(
          id,
          updateRaceClassDto,
        );
        if (result.affected === 0)
          throw new Error(`Класс с ID ${id} не найден`);
        return this.raceClassRepository.findOneBy({ id });
      },
    );
  }

  remove(id: string): Promise<IAnalytics<void>> {
    return this.analyticsService.provide(
      {
        successMessage: `Класс с ID ${id} успешно удален`,
        failureMessage: `Не удалось удалить класс с ID ${id}`,
        id: 'deleteClass',
      },
      async () => {
        const result = await this.raceClassRepository.delete(id);
        if (result.affected === 0)
          throw new Error(`Класс с ID ${id} не найдена`);
      },
    );
  }
}
