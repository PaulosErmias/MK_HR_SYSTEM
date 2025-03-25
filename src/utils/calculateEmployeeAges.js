export const calculateEmployeeAges = function (dateString) {
  const dob = new Date(dateString);
  const now = new Date();

  // Get UTC-based current date components
  const currentYear = now.getUTCFullYear();
  const currentMonth = now.getUTCMonth();
  const currentDay = now.getUTCDate();

  // Get UTC-based birth date components
  const birthYear = dob.getUTCFullYear();
  const birthMonth = dob.getUTCMonth();
  const birthDay = dob.getUTCDate();

  let age = currentYear - birthYear;

  // Adjust if birthday hasn't occurred yet this year
  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    age--;
  }

  return age;
};
