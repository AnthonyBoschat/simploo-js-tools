/**
 * Groups array items into a record keyed by the result of `getKey`.
 *
 * @example
 * ```ts
 * groupBy(["one", "two", "three"], (word) => word.length)
 * // { 3: ["one", "two"], 5: ["three"] }
 * ```
 */
export declare function groupBy<T, K extends string | number | symbol>(items: T[], getKey: (item: T) => K): Record<K, T[]>;
