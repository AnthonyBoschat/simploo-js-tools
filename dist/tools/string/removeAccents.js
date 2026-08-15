const DIACRITICS_REGEX = /[\u0300-\u036f]/g;
/**
 * Removes accents and diacritics from a string.
 *
 * @example
 * ```ts
 * removeAccents("crème brûlée")   // "creme brulee"
 * removeAccents("café")          // "cafe"
 * removeAccents("")              // ""
 * ```
 */
export function removeAccents(text) {
    const normalizedText = text.normalize("NFD");
    return normalizedText.replace(DIACRITICS_REGEX, "");
}
