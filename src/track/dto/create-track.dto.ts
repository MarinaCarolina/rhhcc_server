import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTrackDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsNumber()
  lap_length: number;

  @IsOptional()
  @IsNumber()
  best_result?: number;
}
