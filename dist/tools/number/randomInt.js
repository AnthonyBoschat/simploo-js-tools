/**
 * Generates a random integer between `min` and `max`, both inclusive.
 *
 * @example
 * ```ts
 * randomInt(1, 6)    // an integer between 1 and 6
 * randomInt(5, 5)    // 5
 * ```
 */
export function randomInt(min, max) {
    const lowerBound = Math.ceil(min);
    const upperBound = Math.floor(max);
    return Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
}
