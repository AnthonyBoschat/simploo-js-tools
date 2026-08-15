/**
 * Creates a deep copy of a value. Uses `structuredClone` when available,
 * with a recursive fallback for plain objects and arrays.
 *
 * @example
 * ```ts
 * const original = { user: { name: "Alice" } }
 * const cloned = deepClone(original)
 * cloned.user.name = "Bob"
 * original.user.name   // "Alice" (unchanged)
 * ```
 */
export declare function deepClone<T>(value: T): T;
