import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TraceModule } from './trace/trace.module';

@Module({
  imports: [TraceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
