/**
 * Capitalizes the first letter of a string.
 *
 * @example
 * ```ts
 * capitalize("hello")   // "Hello"
 * capitalize("")        // ""
 * ```
 */
export function capitalize(text: string): string {
    if (text.length === 0) return ""
    const firstLetter = text.charAt(0).toUpperCase()
    const rest = text.slice(1)
    return firstLetter + rest
}
