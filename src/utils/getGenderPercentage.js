export const getGenderPercentage = function (employees) {
  // Add safety checks
  if (!Array.isArray(employees) || employees.length === 0) {
    return [0, 0]; // Default empty state
  }

  const counts = employees.reduce(
    (acc, emp) => {
      if (emp.gender === "Male") acc.maleCount++;
      else if (emp.gender === "Female") acc.femaleCount++;
      return acc;
    },
    { maleCount: 0, femaleCount: 0 }
  );

  const totalEmp = counts.maleCount + counts.femaleCount;

  // Handle division by zero
  if (totalEmp === 0) return [0, 0];

  const malePercent = Math.round((counts.maleCount / totalEmp) * 1000) / 10;
  const femalePercent = Math.round((counts.femaleCount / totalEmp) * 1000) / 10;

  return [malePercent, femalePercent];
};
