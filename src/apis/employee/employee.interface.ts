export interface IEmployeeService {
  addEmployee(payload: any): Promise<object>;
  getEmployee(employeeId: number): Promise<object>;
  updateEmployee(payload: any, employeeId: number): Promise<object>;
  deleteEmployee(employeeId: number): Promise<object>;
}
