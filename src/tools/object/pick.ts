/**
 * Creates a new object containing only the given keys.
 *
 * @example
 * ```ts
 * pick({ id: 1, name: "Alice", age: 30 }, ["id", "name"])
 * // { id: 1, name: "Alice" }
 * ```
 */
export function pick<T extends object, K extends keyof T>(source: T, keys: K[]): Pick<T, K> {
    const result = {} as Pick<T, K>

    for (const key of keys) {
        result[key] = source[key]
    }

    return result
}
