import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDate } from 'class-validator';
import { Point } from './point.dto';

export class Trace {
  @IsDate()
  @Transform(({ value }) => new Date(value))
  @ApiProperty()
  timestamp: Date;

  @ApiProperty({ type: [Point] })
  points: Point[];
}
