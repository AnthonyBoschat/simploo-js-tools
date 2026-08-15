/**
 * Generates a random decimal number between `min` and `max`, both inclusive,
 * rounded to a given number of decimal places.
 *
 * @example
 * ```ts
 * randomDecimal(0, 1)      // e.g. 0.42 (2 decimals by default)
 * randomDecimal(1, 10, 0)  // e.g. 7
 * ```
 */
export declare function randomDecimal(min: number, max: number, decimals?: number): number;
