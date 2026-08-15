import { round } from "./round.js";
const DEFAULT_DECIMALS = 2;
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
export function randomDecimal(min, max, decimals = DEFAULT_DECIMALS) {
    const randomValue = Math.random() * (max - min) + min;
    return round(randomValue, decimals);
}
