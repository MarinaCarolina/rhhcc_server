export class CreateStageDto {
  name: string;
  date: Date;
  year: number;
  configuration: string;
  trackId: number; // связь с автодромом
}
