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
export const REGEX = Object.freeze({

    /**
     * Standard email address (simplified RFC 5322).
     * @example "user.name+tag@sub.domain.com" ✓ — "user@domain" ✗
     */
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,


    /**
     * International phone number, with or without separators.
     * @example "+33 6 12 34 56 78" ✓ — "(555) 123-4567" ✓
     */
    phone: /^\+?[-.\s()]*[0-9](?:[-.\s()]*[0-9]){6,14}$/,

    /**
     * French phone number: 10 digits starting with 0,
     * or +33 format, with optional separators.
     * @example "06 12 34 56 78" ✓ — "+33612345678" ✓
     */
    frenchPhone: /^(?:(?:\+|00)33[-.\s]?|0)[1-9](?:[-.\s]?\d{2}){4}$/,

    /**
     * URL starting with http or https.
     * @example "https://domain.com/path?q=1" ✓ — "ftp://host" ✗
     */
    url: /^https?:\/\/[^\s/$.?#].[^\s]*$/i,

    /**
     * Date in DD/MM/YYYY format (structure only).
     * @example "25/12/2026" ✓ — "2026-12-25" ✗
     */
    dateFr: /^\d{2}\/\d{2}\/\d{4}$/,

    /**
     * Date in ISO format YYYY-MM-DD (structure only).
     * @example "2026-12-25" ✓ — "25/12/2026" ✗
     */
    dateIso: /^\d{4}-\d{2}-\d{2}$/,

    /**
     * Time in 24h format HH:MM.
     * @example "23:59" ✓ — "24:00" ✗
     */
    time24h: /^([01]\d|2[0-3]):[0-5]\d$/,

    /**
     * UUID v4 (as returned by `crypto.randomUUID()`).
     * @example "d9428888-122b-41f4-8007-8a1c3e05a3f1" ✓
     */
    uuid: /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,

    /**
     * Hexadecimal color, 3 or 6 digits, with #.
     * @example "#fff" ✓ — "#1a2b3c" ✓ — "fff" ✗
     */
    hexColor: /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i,

    /**
     * French postal code (5 digits, 01000 to 98999).
     * @example "75001" ✓ — "00100" ✗
     */
    frenchZipCode: /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/,

    /**
     * Slug: lowercase letters, digits and hyphens,
     * no leading/trailing/consecutive hyphens.
     * @example "my-blog-post-2026" ✓ — "My Post" ✗
     */
    slug: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,

    /**
     * Integer, positive or negative.
     * @example "42" ✓ — "-17" ✓ — "3.14" ✗
     */
    integer: /^-?\d+$/,

    /**
     * Decimal number, dot or comma separator.
     * @example "3.14" ✓ — "3,14" ✓ — "42" ✓
     */
    decimal: /^-?\d+(?:[.,]\d+)?$/,

} as const)