import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './car.entity';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
  ) {}

  findAll(): Promise<Car[]> {
    return this.carRepository.find();
  }

  findOne(id: string): Promise<Car> {
    return this.carRepository.findOneBy({ id });
  }

  create(Car: Car): Promise<Car> {
    return this.carRepository.save(Car);
  }

  async remove(id: string): Promise<void> {
    await this.carRepository.delete(id);
  }
}
