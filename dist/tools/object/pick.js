/**
 * Creates a new object containing only the given keys.
 *
 * @example
 * ```ts
 * pick({ id: 1, name: "Alice", age: 30 }, ["id", "name"])
 * // { id: 1, name: "Alice" }
 * ```
 */
export function pick(source, keys) {
    const result = {};
    for (const key of keys) {
        result[key] = source[key];
    }
    return result;
}
