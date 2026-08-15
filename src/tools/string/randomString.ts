const ALPHANUMERIC_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

/**
 * Generates a random alphanumeric string of the given length.
 *
 * @example
 * ```ts
 * randomString(8)   // "aZ3kLp9Q" (length 8, value varies each call)
 * randomString(0)   // ""
 * ```
 */
export function randomString(length: number): string {
    const characters: string[] = []

    for (let index = 0; index < length; index++) {
        const randomIndex = Math.floor(Math.random() * ALPHANUMERIC_CHARACTERS.length)
        characters.push(ALPHANUMERIC_CHARACTERS[randomIndex])
    }

    return characters.join("")
}
