function deepCloneRecursive<T>(value: T): T {
    if (value === null || typeof value !== "object") return value

    if (Array.isArray(value)) {
        return value.map((item) => deepCloneRecursive(item)) as T
    }

    const clonedObject = {} as T
    for (const key of Object.keys(value) as (keyof T)[]) {
        clonedObject[key] = deepCloneRecursive(value[key])
    }

    return clonedObject
}

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
export function deepClone<T>(value: T): T {
    if (typeof structuredClone === "function") {
        return structuredClone(value)
    }
    return deepCloneRecursive(value)
}
