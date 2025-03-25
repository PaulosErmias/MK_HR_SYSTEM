import { useApiQuery } from "./api";

export function useDepartmentsQuery(params = {}) {
  return useApiQuery("departments", "/v1.0.0/departments", params, {
    staleTime: 1000 * 60 * 5, // 5 minutes cache
  });
}
