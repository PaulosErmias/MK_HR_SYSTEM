import { useApiQuery } from "./api";

export function useEmployeesQuery(params = {}) {
  return useApiQuery("employees", "/employees", params, {
    staleTime: 1000 * 60 * 5,
  });
}
