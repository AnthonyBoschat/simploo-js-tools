/**
 * Converts a string into a URL-friendly slug: lowercase, accents removed,
 * spaces and special characters replaced by hyphens, with no leading,
 * trailing or consecutive hyphens.
 *
 * @example
 * ```ts
 * slugify("Mon Article 2026!")   // "mon-article-2026"
 * slugify("  Café  &  Thé  ")    // "cafe-the"
 * slugify("")                    // ""
 * ```
 */
export declare function slugify(text: string): string;
