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
export declare function debounce<Args extends unknown[]>(fn: (...args: Args) => void, delay: number): (...args: Args) => void;
