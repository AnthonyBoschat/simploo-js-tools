/**
 * Returns a new array with the items shuffled in random order
 * (Fisher-Yates algorithm). The original array is not mutated.
 *
 * @example
 * ```ts
 * shuffle([1, 2, 3, 4])   // e.g. [3, 1, 4, 2]
 * shuffle([])             // []
 * ```
 */
export declare function shuffle<T>(items: T[]): T[];
