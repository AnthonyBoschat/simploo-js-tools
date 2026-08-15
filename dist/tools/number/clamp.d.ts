/**
 * Clamps a value between a minimum and a maximum.
 *
 * @example
 * ```ts
 * clamp(15, 0, 10)   // 10
 * clamp(-5, 0, 10)   // 0
 * clamp(5, 0, 10)    // 5
 * ```
 */
export declare function clamp(value: number, min: number, max: number): number;
