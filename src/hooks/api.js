// src/hooks/api.js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "../lib/api";

// Generic query hook
export function useApiQuery(key, path, params = {}, options = {}) {
  return useQuery({
    queryKey: [key, params],
    queryFn: () => apiClient.get(path, { params }),
    ...options,
  });
}

// Generic mutation hook
export function useApiMutation(method = "post", options = {}) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ path, data }) => apiClient[method](path, data),
    onSettled: () => {
      queryClient.invalidateQueries(); // Optional global invalidation
    },
    ...options,
  });
}

// Specific query hook example for departments
// export function useDepartmentsQuery(params = {}) {
//   return useApiQuery("departments", "/v1.0.0/departments", params, {
//     staleTime: 1000 * 60 * 5, // 5 minutes cache
//   });
// }

// Specific mutation hook example for creating department
// export function useCreateDepartmentMutation() {
//   return useApiMutation("post", {
//     onSuccess: () => {
//       console.log("Department created successfully");
//     },
//     onError: (error) => {
//       console.error("Creation failed:", error);
//     },
//   });
// }
