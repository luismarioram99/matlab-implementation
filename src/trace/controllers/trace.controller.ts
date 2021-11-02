import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Trace } from '../dto/trace.dto';
import { TraceService } from '../services/trace.service';

@ApiTags('Trace')
@Controller('trace')
export class TraceController {
  constructor(private readonly traceService: TraceService) {}

  @Post()
  sendTrace(@Body() data: Trace) {
    return this.traceService.exportTrace(data);
  }
}
