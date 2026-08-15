export type PasswordCheck = {
    valid: boolean;
    errors: string[];
};
export type PasswordOptions = {
    minLength?: number;
    requireLowercase?: boolean;
    requireUppercase?: boolean;
    requireDigit?: boolean;
    requireSpecial?: boolean;
};
/**
 * Validates a password and returns the list of failed rules.
 * Useful for showing precise feedback in a form.
 *
 * @example
 * ```ts
 * checkPassword("abc")
 * // { valid: false, errors: ["Too short (min 12)", "Missing uppercase", "Missing digit", "Missing special character"] }
 * ```
 */
export declare function checkPassword(password: string, options?: PasswordOptions): PasswordCheck;
