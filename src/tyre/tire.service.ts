import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tire } from './tire.entity';
import {
  AnalyticsService,
  IAnalytics,
} from '../utils/analytics/analytics.service';
import { CreateTireDto } from './dto/create-tire.dto';
import { UpdateTireDto } from './dto/update-tire.dto';

@Injectable()
export class TireService {
  constructor(
    @InjectRepository(Tire)
    private readonly tireRepository: Repository<Tire>,
    private readonly analyticsService: AnalyticsService,
  ) {}

  findAll(): Promise<IAnalytics<Tire[]>> {
    return this.analyticsService.provide<Tire[]>(
      {
        successMessage: 'Все шины успешно получены',
        failureMessage: 'Не удалось получить шины',
        id: 'findAllTires',
      },
      async () => {
        return this.tireRepository.find();
      },
    );
  }

  findOne(id: string): Promise<IAnalytics<Tire>> {
    return this.analyticsService.provide(
      {
        successMessage: `Шина с ID ${id} успешно получена`,
        failureMessage: `Шина с ID ${id} не найдена`,
        id: 'findTireById',
      },
      async () => {
        const tire = await this.tireRepository.findOneBy({ id });
        if (!tire) throw new Error(`Шина с ID ${id} не найдена`);
        return tire;
      },
    );
  }

  create(createTireDto: CreateTireDto): Promise<IAnalytics<Tire>> {
    return this.analyticsService.provide(
      {
        successMessage: 'Шина успешно создана',
        failureMessage: 'Не удалось создать шину',
        id: 'createTire',
      },
      async () => {
        const tire = this.tireRepository.create(createTireDto);
        return this.tireRepository.save(tire);
      },
    );
  }

  update(id: string, updateTireDto: UpdateTireDto): Promise<IAnalytics<Tire>> {
    return this.analyticsService.provide(
      {
        successMessage: `Шина с ID ${id} успешно обновлена`,
        failureMessage: `Не удалось обновить шину с ID ${id}`,
        id: 'updateTire',
      },
      async () => {
        const result = await this.tireRepository.update(id, updateTireDto);
        if (result.affected === 0)
          throw new Error(`Шина с ID ${id} не найдена`);
        return this.tireRepository.findOneBy({ id });
      },
    );
  }

  remove(id: string): Promise<IAnalytics<void>> {
    return this.analyticsService.provide(
      {
        successMessage: `Шина с ID ${id} успешно удалена`,
        failureMessage: `Не удалось удалить шину с ID ${id}`,
        id: 'deleteTire',
      },
      async () => {
        const result = await this.tireRepository.delete(id);
        if (result.affected === 0)
          throw new Error(`Шина с ID ${id} не найдена`);
      },
    );
  }
}
