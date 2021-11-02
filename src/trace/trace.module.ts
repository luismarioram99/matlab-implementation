import { Module } from '@nestjs/common';
import { TraceService } from './services/trace.service';
import { TraceController } from './controllers/trace.controller';

@Module({
  controllers: [TraceController],
  providers: [TraceService],
})
export class TraceModule {}
