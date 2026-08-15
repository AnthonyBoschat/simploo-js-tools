/**
 * Splits an array into chunks of a given size. The last chunk may be
 * smaller if the array length is not a multiple of `size`.
 *
 * @example
 * ```ts
 * chunk([1, 2, 3, 4, 5], 2)   // [[1, 2], [3, 4], [5]]
 * chunk([], 2)                // []
 * ```
 */
export function chunk<T>(items: T[], size: number): T[][] {
    const chunks: T[][] = []

    for (let startIndex = 0; startIndex < items.length; startIndex += size) {
        const endIndex = startIndex + size
        chunks.push(items.slice(startIndex, endIndex))
    }

    return chunks
}
