const defaultHeaders = {
  "Content-Type": "application/json",
};
export function makeFetch(url, data, config = {}) {
  return fetch(url, {
    ...config,
    headers: { ...defaultHeaders, ...(config?.headers ?? {}) },
    data,
  });
}
