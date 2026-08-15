import { sleep } from "./sleep.js"

const DEFAULT_DELAY_MS = 0

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
export async function retry<T>(fn: () => Promise<T>, attempts: number, delayMs: number = DEFAULT_DELAY_MS): Promise<T> {
    let lastError: unknown

    for (let attempt = 0; attempt < attempts; attempt++) {
        try {
            return await fn()
        } catch (error) {
            lastError = error
            const isLastAttempt = attempt === attempts - 1
            if (!isLastAttempt && delayMs > 0) {
                await sleep(delayMs)
            }
        }
    }

    throw lastError
}
