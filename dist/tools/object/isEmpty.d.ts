/**
 * Checks whether a value is "empty": an empty string, `null`, `undefined`,
 * an empty array or an object with no own keys.
 *
 * @example
 * ```ts
 * isEmpty("")           // true
 * isEmpty([])           // true
 * isEmpty({})           // true
 * isEmpty(null)         // true
 * isEmpty("hello")      // false
 * isEmpty({ id: 1 })    // false
 * isEmpty(0)            // false
 * ```
 */
export declare function isEmpty(value: unknown): boolean;
