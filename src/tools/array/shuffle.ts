/**
 * Returns a new array with the items shuffled in random order
 * (Fisher-Yates algorithm). The original array is not mutated.
 *
 * @example
 * ```ts
 * shuffle([1, 2, 3, 4])   // e.g. [3, 1, 4, 2]
 * shuffle([])             // []
 * ```
 */
export function shuffle<T>(items: T[]): T[] {
    const shuffledItems = [...items]

    for (let currentIndex = shuffledItems.length - 1; currentIndex > 0; currentIndex--) {
        const randomIndex  = Math.floor(Math.random() * (currentIndex + 1))
        const currentValue = shuffledItems[currentIndex]
        shuffledItems[currentIndex] = shuffledItems[randomIndex]
        shuffledItems[randomIndex]  = currentValue
    }

    return shuffledItems
}
