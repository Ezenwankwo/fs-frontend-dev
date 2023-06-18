import { useAuthStore } from "~~/store/auth";

export function $api<T>(
  request: Parameters<typeof $fetch<T>>[0],
  opts?: Parameters<typeof $fetch<T>>[1]
) {
  const config = useRuntimeConfig();
  const authState = useAuthStore().$state;

  return $fetch<T>(request, {
    ...opts,
    baseURL: config.public.baseURL,
    headers: {
      Authorization: authState?.token ? `Bearer ${authState?.token}` : "",
      ...opts?.headers,
    },
  });
}
