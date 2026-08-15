/**
 * Waits for a given number of milliseconds.
 *
 * @example
 * ```ts
 * await sleep(1000)   // resolves after 1 second
 * ```
 */
export function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
