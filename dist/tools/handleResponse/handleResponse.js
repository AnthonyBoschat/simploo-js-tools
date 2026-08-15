function toRequestError(error) {
    const response = error?.response;
    const status = response?.status ?? 0;
    const data = response?.data ?? null;
    return { status, data, cause: error };
}
/**
 * Runs an async request and dispatches the outcome to callbacks.
 * Works with any Promise-based client (fetch, axios, ky...).
 *
 * `onError` is always called on failure — including network errors,
 * timeouts, and responses with no body — and receives a normalized
 * error object so you can branch on the HTTP status.
 *
 * Note: native `fetch` does not throw on 4xx/5xx. Make your `request`
 * throw on error statuses if you want `onError` to fire for them.
 *
 * @template T - Type of the resolved response data
 * @param request - Function returning the request promise
 * @param onSuccess - Called with the data if the request succeeds
 * @param onError - Called with a normalized error if the request fails
 *
 * @example
 * With axios:
 * ```ts
 * handleResponse({
 *     request: () => api.get("/users/1").then(res => res.data),
 *     onSuccess: (user) => console.log(user),
 *     onError: ({ status, data }) => {
 *         if (status === 404)      showNotFound()
 *         else if (status === 0)   showNetworkError()
 *         else                     showGenericError(data)
 *     },
 * })
 * ```
 *
 * @example
 * With fetch (throwing on error statuses):
 * ```ts
 * handleResponse({
 *     request: () => fetch("/users/1").then(res => {
 *         if (!res.ok) throw { response: { status: res.status, data: res.statusText } }
 *         return res.json()
 *     }),
 *     onSuccess: (user) => console.log(user),
 *     onError: ({ status }) => console.error("Failed:", status),
 * })
 * ```
 */
export async function handleResponse({ request, onSuccess, onError }) {
    try {
        const data = await request();
        onSuccess?.(data);
    }
    catch (error) {
        onError?.(toRequestError(error));
    }
}
