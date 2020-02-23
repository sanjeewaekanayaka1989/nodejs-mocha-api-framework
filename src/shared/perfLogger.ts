
import { Logger } from '@shared/logger';

enum STATUS {
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED'
}

class PerfLogger {
  private readonly _logger: Logger;
  public constructor() {
    this._logger = new Logger({ tags: [PerfLogger.name] });
  }
  public start(): [number, number] {
    return process.hrtime();
  }
  public end(
    operation: string,
    status: STATUS,
    startTime: [number, number]
  ): void {
    const elapsed: number =
      process.hrtime(startTime)[0] * 1000 +
      process.hrtime(startTime)[1] / 1000000;
    this._logger.info(operation, { operation, runTime: elapsed, status });
  }
}
export { PerfLogger, STATUS };
