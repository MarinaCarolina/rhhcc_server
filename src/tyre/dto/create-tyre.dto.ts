import { IsNumber, IsString } from 'class-validator';

export class CreateTyreDto {
  @IsString()
  name: string;

  @IsString()
  tire_model: string;

  @IsNumber()
  tire_width: number;

  @IsNumber()
  tire_diameter: number;
}
