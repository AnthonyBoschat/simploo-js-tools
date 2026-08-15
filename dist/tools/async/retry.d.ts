/**
 * Retries an async function up to `attempts` times, with an optional
 * pause between attempts. Rejects with the last error if every
 * attempt fails.
 *
 * @example
 * ```ts
 * const user = await retry(() => fetchUser(id), 3, 500)
 * ```
 */
export declare function retry<T>(fn: () => Promise<T>, attempts: number, delayMs?: number): Promise<T>;
