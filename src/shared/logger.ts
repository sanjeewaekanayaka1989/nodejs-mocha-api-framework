/**
 * Author: Sanjeewa Ekanayaka (sekanayaka@mitrai.com)
 * Created on: 30-09-19
 * Description: 
 * Module: Hedgehog API Automation
 * Copyright (c) 2019 Leap In! All rights reserved.
 */

import { LambdaLog, LambdaLogOptions } from 'lambda-log';
​
export class Logger extends LambdaLog {
  public constructor(options?: LambdaLogOptions) {
    super(options);
  }
}