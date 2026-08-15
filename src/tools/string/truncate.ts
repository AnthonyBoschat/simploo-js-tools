const DEFAULT_SUFFIX = "…"

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
export function truncate(text: string, maxLength: number, suffix: string = DEFAULT_SUFFIX): string {
    if (text.length <= maxLength) return text

    const visibleLength = Math.max(maxLength - suffix.length, 0)
    const visibleText   = text.slice(0, visibleLength)
    return visibleText + suffix
}
