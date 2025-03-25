export const getDepartmentEmployeeCounts = function (employees, departments) {
  const counts = {};
  employees.forEach((employee) => {
    counts[employee.deptcode] = (counts[employee.deptcode] || 0) + 1;
  });
  return departments.map((dept) => counts[dept.deptcode] || 0);
};
