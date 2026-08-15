const DEFAULT_DECIMALS = 0;
/**
 * Rounds a number to a given number of decimal places.
 *
 * @example
 * ```ts
 * round(3.14159, 2)   // 3.14
 * round(2.5)          // 3
 * round(-4.6)         // -5
 * ```
 */
export function round(value, decimals = DEFAULT_DECIMALS) {
    const factor = 10 ** decimals;
    return Math.round(value * factor) / factor;
}
