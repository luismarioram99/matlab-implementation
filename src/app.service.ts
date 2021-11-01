import { Injectable } from '@nestjs/common';

import { execSync } from 'child_process';

@Injectable()
export class AppService {
  executeCmd(): string {
    const result = execSync('ls -l');
    console.info(result.toString());
    return result.toString();
  }
}
