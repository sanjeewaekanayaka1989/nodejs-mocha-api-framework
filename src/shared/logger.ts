

import { LambdaLog, LambdaLogOptions } from 'lambda-log';
​
export class Logger extends LambdaLog {
  public constructor(options?: LambdaLogOptions) {
    super(options);
  }
}