import { Logger } from '@shared/logger';
import { IApiClient, ApiClient } from '@shared/apiClient';
import { IEmployeeService } from './employee.interface';
import { EmployeeService } from './employee.service';
import {
  addEmployeePayload,
  updateEmployeePayload,
  TESTDATA
} from './employee.inputs';
import { HttpStatusCode } from '@constants/httpStatusCodes';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

@suite
export class InternalProviderTest {
  private readonly logger: Logger = new Logger();
  private readonly apiClient: IApiClient = new ApiClient();
  private readonly employeeService: IEmployeeService = new EmployeeService(
    this.logger,
    this.apiClient
  );
  @test
  async 'Validate Add employee'() {
    let addEmployeeResponse: any = await this.employeeService.addEmployee(
      addEmployeePayload
    );
    const addProviderResponseJson: any = JSON.parse(
      JSON.stringify(addEmployeeResponse.body)
    );

    expect(addEmployeeResponse.statusCode).to.eql(HttpStatusCode.Ok);

    expect(addProviderResponseJson.data.name).to.eql(addEmployeePayload.name);
    expect(addProviderResponseJson.data.salary).to.eql(
      addEmployeePayload.salary
    );
    expect(addProviderResponseJson.data.age).to.eql(addEmployeePayload.age);
  }
  @test
  async 'Validate get employee'() {
    let getEmployeeResponse: any = await this.employeeService.getEmployee(
      TESTDATA.EMPLOYEE_ID
    );

    expect(getEmployeeResponse.statusCode).to.eql(HttpStatusCode.Ok);
  }
  @test
  async 'Validate update employee'() {
    let updateEmployeeResponse: any = await this.employeeService.updateEmployee(
      updateEmployeePayload,
      TESTDATA.EMPLOYEE_ID
    );

    expect(updateEmployeeResponse.statusCode).to.eql(HttpStatusCode.Ok);
  }
}
