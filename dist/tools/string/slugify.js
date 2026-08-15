import { removeAccents } from "./removeAccents.js";
const NON_ALPHANUMERIC_REGEX = /[^a-z0-9]+/g;
const EDGE_HYPHENS_REGEX = /^-+|-+$/g;
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
export function slugify(text) {
    const lowercaseText = text.toLowerCase();
    const textWithoutAccents = removeAccents(lowercaseText);
    const textWithHyphens = textWithoutAccents.replace(NON_ALPHANUMERIC_REGEX, "-");
    const slug = textWithHyphens.replace(EDGE_HYPHENS_REGEX, "");
    return slug;
}
