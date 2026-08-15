/**
 * Splits an array into chunks of a given size. The last chunk may be
 * smaller if the array length is not a multiple of `size`.
 *
 * @example
 * ```ts
 * chunk([1, 2, 3, 4, 5], 2)   // [[1, 2], [3, 4], [5]]
 * chunk([], 2)                // []
 * ```
 */
export declare function chunk<T>(items: T[], size: number): T[][];
