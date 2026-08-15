/**
 * Creates an array of integers from `start` to `end`, both inclusive.
 *
 * @example
 * ```ts
 * range(1, 5)   // [1, 2, 3, 4, 5]
 * range(5, 5)   // [5]
 * ```
 */
export function range(start, end) {
    const result = [];
    for (let value = start; value <= end; value++) {
        result.push(value);
    }
    return result;
}
