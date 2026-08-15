/**
 * Checks whether a value is "empty": an empty string, `null`, `undefined`,
 * an empty array or an object with no own keys.
 *
 * @example
 * ```ts
 * isEmpty("")           // true
 * isEmpty([])           // true
 * isEmpty({})           // true
 * isEmpty(null)         // true
 * isEmpty("hello")      // false
 * isEmpty({ id: 1 })    // false
 * isEmpty(0)            // false
 * ```
 */
export function isEmpty(value: unknown): boolean {
    if (value === null || value === undefined) return true
    if (typeof value === "string") return value.length === 0
    if (Array.isArray(value)) return value.length === 0
    if (typeof value === "object") return Object.keys(value).length === 0
    return false
}
