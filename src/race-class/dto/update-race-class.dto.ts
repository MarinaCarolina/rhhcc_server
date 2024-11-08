import { PartialType } from '@nestjs/mapped-types';
import { CreateRaceClassDto } from './create-race-class.dto';

export class UpdateRaceClassDto extends PartialType(CreateRaceClassDto) {}
