/**
 * Removes duplicate values from an array.
 *
 * @example
 * ```ts
 * unique([1, 2, 2, 3, 1])   // [1, 2, 3]
 * unique([])                // []
 * ```
 */
export function unique(items) {
    return [...new Set(items)];
}
