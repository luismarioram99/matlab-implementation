import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDate, IsNumber } from 'class-validator';

export class Point {
  @IsDate()
  @Transform(({ value }) => new Date(value))
  @ApiProperty()
  timestamp: Date;

  @IsNumber()
  @ApiProperty()
  x: number;

  @IsNumber()
  @ApiProperty()
  y: number;
}
