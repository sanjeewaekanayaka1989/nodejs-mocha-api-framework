const BASE_PATHS = {
  EMPLOYEE: 'api/v1'
};

export const API_PATHS = {
  ADD_EMPLOYEE: () => `${BASE_PATHS.EMPLOYEE}/create`,
  GET_EMPLOYEE: (employeeId: number) =>
    `${BASE_PATHS.EMPLOYEE}/employee/${employeeId}`,

  UPDATE_EMPLOYEE: (employeeId: number) =>
    `${BASE_PATHS.EMPLOYEE}/update/${employeeId}`,

  DELETE_EMPLOYEE: (employeeId: number) =>
    `${BASE_PATHS.EMPLOYEE}/delete/${employeeId}`
};
