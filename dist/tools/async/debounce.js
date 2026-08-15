/**
 * Returns a debounced version of `fn` that only runs after `delay`
 * milliseconds have passed without a new call.
 *
 * @example
 * ```ts
 * const debouncedSearch = debounce((query: string) => search(query), 300)
 * debouncedSearch("a")
 * debouncedSearch("ab")   // only this call runs, 300ms after the last keystroke
 * ```
 */
export function debounce(fn, delay) {
    let timeoutId;
    return (...args) => {
        if (timeoutId !== undefined)
            clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
}
