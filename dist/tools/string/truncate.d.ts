/**
 * Truncates a string to a maximum length, appending a suffix when truncated.
 * The suffix is included in the final length. Returns the text unchanged
 * when it already fits within `maxLength`.
 *
 * @example
 * ```ts
 * truncate("Hello world", 8)          // "Hello w…"
 * truncate("Hello world", 8, "...")   // "Hello..."
 * truncate("Hi", 10)                  // "Hi"
 * ```
 */
export declare function truncate(text: string, maxLength: number, suffix?: string): string;
