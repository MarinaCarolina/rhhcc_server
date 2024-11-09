import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tyre } from './tyre.entity';
import {
  AnalyticsService,
  IAnalytics,
} from '../utils/analytics/analytics.service';
import { CreateTyreDto } from './dto/create-tyre.dto';
import { UpdateTyreDto } from './dto/update-tyre.dto';

@Injectable()
export class TyreService {
  constructor(
    @InjectRepository(Tyre)
    private readonly tyreRepository: Repository<Tyre>,
    private readonly analyticsService: AnalyticsService,
  ) {}

  findAll(): Promise<IAnalytics<Tyre[]>> {
    return this.analyticsService.provide<Tyre[]>(
      {
        successMessage: 'Все шины успешно получены',
        failureMessage: 'Не удалось получить шины',
        id: 'findAllTyres',
      },
      async () => {
        return this.tyreRepository.find();
      },
    );
  }

  findOne(id: string): Promise<IAnalytics<Tyre>> {
    return this.analyticsService.provide(
      {
        successMessage: `Шина с ID ${id} успешно получена`,
        failureMessage: `Шина с ID ${id} не найдена`,
        id: 'findTyreById',
      },
      async () => {
        const tyre = await this.tyreRepository.findOneBy({ id });
        if (!tyre) throw new Error(`Шина с ID ${id} не найдена`);
        return tyre;
      },
    );
  }

  create(createTyreDto: CreateTyreDto): Promise<IAnalytics<Tyre>> {
    return this.analyticsService.provide(
      {
        successMessage: 'Шина успешно создана',
        failureMessage: 'Не удалось создать шину',
        id: 'createTyre',
      },
      async () => {
        const tyre = this.tyreRepository.create(createTyreDto);
        return this.tyreRepository.save(tyre);
      },
    );
  }

  update(id: string, updateTyreDto: UpdateTyreDto): Promise<IAnalytics<Tyre>> {
    return this.analyticsService.provide(
      {
        successMessage: `Шина с ID ${id} успешно обновлена`,
        failureMessage: `Не удалось обновить шину с ID ${id}`,
        id: 'updateTyre',
      },
      async () => {
        const result = await this.tyreRepository.update(id, updateTyreDto);
        if (result.affected === 0)
          throw new Error(`Шина с ID ${id} не найдена`);
        return this.tyreRepository.findOneBy({ id });
      },
    );
  }

  remove(id: string): Promise<IAnalytics<void>> {
    return this.analyticsService.provide(
      {
        successMessage: `Шина с ID ${id} успешно удалена`,
        failureMessage: `Не удалось удалить шину с ID ${id}`,
        id: 'deleteTyre',
      },
      async () => {
        const result = await this.tyreRepository.delete(id);
        if (result.affected === 0)
          throw new Error(`Шина с ID ${id} не найдена`);
      },
    );
  }
}
