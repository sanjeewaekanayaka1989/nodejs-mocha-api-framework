import { IEmployeeService } from './employee.interface';
import { Logger } from '@shared/logger';
import { IApiClient } from '@shared/apiClient';
import { API_PATHS } from '@constants/apiConstants';

export class EmployeeService implements IEmployeeService {
  constructor(
    private readonly _logger: Logger,
    private readonly _apiClient: IApiClient
  ) {
    this._logger.info(`${EmployeeService.name} Initialized`);
  }

  async addEmployee(payload: any): Promise<object> {
    return this._apiClient.post(API_PATHS.ADD_EMPLOYEE(), payload);
  }

  async getEmployee(employeeId: number): Promise<object> {
    return this._apiClient.get(API_PATHS.GET_EMPLOYEE(employeeId));
  }

  async updateEmployee(payload: any, employeeId: number): Promise<object> {
    return this._apiClient.put(API_PATHS.UPDATE_EMPLOYEE(employeeId), payload);
  }
  async deleteEmployee(employeeId: number): Promise<object> {
    return this._apiClient.delete(API_PATHS.DELETE_EMPLOYEE(employeeId));
  }
}
