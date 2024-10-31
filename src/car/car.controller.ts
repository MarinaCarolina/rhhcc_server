import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CarService } from './car.service';
import { Car } from './car.entity';

@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  findAll(): Promise<Car[]> {
    return this.carService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Car> {
    return this.carService.findOne(Number(id));
  }

  @Post()
  create(@Body() car: Car): Promise<Car> {
    return this.carService.create(car);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.carService.remove(Number(id));
  }
}
