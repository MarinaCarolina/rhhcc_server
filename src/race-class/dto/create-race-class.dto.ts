import { IsString } from 'class-validator';

export class CreateRaceClassDto {
  @IsString()
  name: string;
}
