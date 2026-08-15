/**
 * Common validation patterns.
 * All patterns validate the full string (anchored with `^` and `$`)
 * and are ready to use with `.test()`.
 *
 * Note: these check structure, not real-world validity
 * (e.g. `99/99/9999` matches `dateFr`).
 *
 * @example
 * ```ts
 * REGEX.email.test("user@domain.com")       // true
 * REGEX.frenchPhone.test("06 12 34 56 78")  // true
 * REGEX.uuid.test(crypto.randomUUID())      // true
 * ```
 */
export declare const REGEX: Readonly<{
    /**
     * Standard email address (simplified RFC 5322).
     * @example "user.name+tag@sub.domain.com" ✓ — "user@domain" ✗
     */
    readonly email: RegExp;
    /**
     * International phone number, with or without separators.
     * @example "+33 6 12 34 56 78" ✓ — "(555) 123-4567" ✓
     */
    readonly phone: RegExp;
    /**
     * French phone number: 10 digits starting with 0,
     * or +33 format, with optional separators.
     * @example "06 12 34 56 78" ✓ — "+33612345678" ✓
     */
    readonly frenchPhone: RegExp;
    /**
     * URL starting with http or https.
     * @example "https://domain.com/path?q=1" ✓ — "ftp://host" ✗
     */
    readonly url: RegExp;
    /**
     * Date in DD/MM/YYYY format (structure only).
     * @example "25/12/2026" ✓ — "2026-12-25" ✗
     */
    readonly dateFr: RegExp;
    /**
     * Date in ISO format YYYY-MM-DD (structure only).
     * @example "2026-12-25" ✓ — "25/12/2026" ✗
     */
    readonly dateIso: RegExp;
    /**
     * Time in 24h format HH:MM.
     * @example "23:59" ✓ — "24:00" ✗
     */
    readonly time24h: RegExp;
    /**
     * UUID v4 (as returned by `crypto.randomUUID()`).
     * @example "d9428888-122b-41f4-8007-8a1c3e05a3f1" ✓
     */
    readonly uuid: RegExp;
    /**
     * Hexadecimal color, 3 or 6 digits, with #.
     * @example "#fff" ✓ — "#1a2b3c" ✓ — "fff" ✗
     */
    readonly hexColor: RegExp;
    /**
     * French postal code (5 digits, 01000 to 98999).
     * @example "75001" ✓ — "00100" ✗
     */
    readonly frenchZipCode: RegExp;
    /**
     * Slug: lowercase letters, digits and hyphens,
     * no leading/trailing/consecutive hyphens.
     * @example "my-blog-post-2026" ✓ — "My Post" ✗
     */
    readonly slug: RegExp;
    /**
     * Integer, positive or negative.
     * @example "42" ✓ — "-17" ✓ — "3.14" ✗
     */
    readonly integer: RegExp;
    /**
     * Decimal number, dot or comma separator.
     * @example "3.14" ✓ — "3,14" ✓ — "42" ✓
     */
    readonly decimal: RegExp;
}>;
