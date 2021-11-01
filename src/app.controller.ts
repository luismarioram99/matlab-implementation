import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Endpoints')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  execute(): string {
    return this.appService.executeCmd();
  }
}
