const DEFAULT_LOCALE = "fr-FR";
/**
 * Formats a number with thousands separators using `Intl.NumberFormat`.
 *
 * @example
 * ```ts
 * formatNumber(1234567)          // "1 234 567"
 * formatNumber(1234567, "en-US") // "1,234,567"
 * ```
 */
export function formatNumber(value, locale = DEFAULT_LOCALE) {
    return new Intl.NumberFormat(locale).format(value);
}
