import { IsNumber, IsString } from 'class-validator';

export class CreateTireDto {
  @IsString()
  tire_brand: string;

  @IsString()
  tire_model: string;

  @IsNumber()
  tire_width: number;

  @IsNumber()
  tire_ratio: number;

  @IsNumber()
  tire_diameter: number;
}
