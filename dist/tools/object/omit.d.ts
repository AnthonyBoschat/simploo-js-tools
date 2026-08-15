/**
 * Creates a new object without the given keys.
 *
 * @example
 * ```ts
 * omit({ id: 1, name: "Alice", age: 30 }, ["age"])
 * // { id: 1, name: "Alice" }
 * ```
 */
export declare function omit<T extends object, K extends keyof T>(source: T, keys: K[]): Omit<T, K>;
