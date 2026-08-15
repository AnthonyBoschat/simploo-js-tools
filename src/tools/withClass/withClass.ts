/**
 * Allowed values for CSS classes.
 * Falsy values (`false`, `null`, `undefined`, `0`) are ignored.
 */
export type ClassValue = string | false | null | undefined | 0

/**
 * Simple CSS class merger.
 * Useful for building React `className` with conditions.
 *
 * @param classNames - CSS classes or conditional expressions
 * @returns Valid classes joined by a space
 *
 * @example
 * Results based on values:
 * ```ts
 * withClass("button", "primary")              // "button primary"
 * withClass("button", false, null, "large")   // "button large"
 * withClass("button", isActive && "active")   // "button active" if isActive, otherwise "button"
 * ```
 *
 * @example
 * Typical React usage with CSS Modules:
 * ```tsx
 * <button
 *     className={withClass(
 *         s.button,
 *         type === "inline" && s.inline,
 *         disabled && s.disabled,
 *     )}
 * />
 * ```
 */
export function withClass(...classNames: ClassValue[]): string {
    const validClassNames = classNames.filter(Boolean)
    return validClassNames.join(" ")
}