import { Injectable } from '@nestjs/common';
import { execSync } from 'child_process';
import { v1 } from 'uuid';
import { Trace } from '../dto/trace.dto';

@Injectable()
export class TraceService {
  exportTrace(trace: Trace) {
    const id = v1();
    const traceJson = JSON.stringify(trace);

    execSync(`echo '${traceJson}' > .data/${id}.json`);

    const result = execSync(`cat .data/${id}.json`, {});

    execSync(`rm .data/${id}.json`);
    return result.toString();
  }
}
