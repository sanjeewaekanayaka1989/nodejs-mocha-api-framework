/**
 * Author: Sanjeewa Ekanayaka (sekanayaka@mitrai.com)
 * Created on: 30-09-19
 * Description:
 * Module: Hedgehog API Automation
 * Copyright (c) 2019 Leap In! All rights reserved.
 */
import { apiBaseUrl } from '../../environment/env.json';

import * as rp from 'request-promise-native';
import { PerfLogger, STATUS } from '@shared/perfLogger';

enum METHODS {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT'
}

interface IApiClient {
  get(apiPath: string, queryStringParams?: object): Promise<any>;

  post(
    apiPath: string,
    requestBody?: object,
    queryStringParams?: object
  ): Promise<any>;

  delete(apiPath: string): Promise<any>;

  put(
    apiPath: string,
    requestBody?: object,
    queryStringParams?: object
  ): Promise<any>;
}

class ApiClient implements IApiClient {
  private readonly _perfLogger: PerfLogger;

  public constructor() {
    this._perfLogger = new PerfLogger();
  }

  public async get(apiPath: string, queryStringParams?: object): Promise<any> {
    const options: rp.RequestPromiseOptions = {
      baseUrl: apiBaseUrl,
      resolveWithFullResponse: true
    };
    options.method = METHODS.GET;
    if (queryStringParams) {
      options.qs = queryStringParams;
    }

    const startTime = this._perfLogger.start();

    try {
      const response = await rp(apiPath, options);
      this._perfLogger.end(apiPath, STATUS.SUCCESS, startTime);
      return response;
    } catch (error) {
      this._perfLogger.end(apiPath, STATUS.FAILED, startTime);
      return error;
    }
  }

  public async post(
    apiPath: string,
    requestBody?: object,
    queryStringParams?: object
  ): Promise<any> {
    const options: rp.RequestPromiseOptions = {
      baseUrl: apiBaseUrl,
      resolveWithFullResponse: true
    };
    options.method = METHODS.POST;

    if (queryStringParams) {
      options.qs = queryStringParams;
    }
    if (requestBody) {
      options.body = requestBody;
    }
    options.json = true;
    const startTime = this._perfLogger.start();

    try {
      const response = await rp(apiPath, options);
      this._perfLogger.end(apiPath, STATUS.SUCCESS, startTime);
      return response;
    } catch (error) {
      this._perfLogger.end(apiPath, STATUS.FAILED, startTime);
      return error;
    }
  }

  public async put(
    apiPath: string,
    requestBody?: object,
    queryStringParams?: object
  ): Promise<any> {
    const options: rp.RequestPromiseOptions = {
      baseUrl: apiBaseUrl,
      resolveWithFullResponse: true
    };
    options.method = METHODS.PUT;

   
    if (queryStringParams) {
      options.qs = queryStringParams;
    }
    if (requestBody) {
      options.body = requestBody;
    }
    options.json = true;
    const startTime = this._perfLogger.start();

    try {
      const response = await rp(apiPath, options);
      this._perfLogger.end(apiPath, STATUS.SUCCESS, startTime);
      return response;
    } catch (error) {
      this._perfLogger.end(apiPath, STATUS.FAILED, startTime);
      return error;
    }
  }

  public async delete(apiPath: string): Promise<any> {
    const options: rp.RequestPromiseOptions = {
      baseUrl: apiBaseUrl,
      resolveWithFullResponse: true
    };
    options.method = METHODS.DELETE;

 

    const startTime = this._perfLogger.start();

    try {
      const response = await rp(apiPath, options);
      this._perfLogger.end(apiPath, STATUS.SUCCESS, startTime);
      return response;
    } catch (error) {
      this._perfLogger.end(apiPath, STATUS.FAILED, startTime);
      return error;
    }
  }
 
}

export { ApiClient, IApiClient, METHODS };
