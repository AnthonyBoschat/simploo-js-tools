/**
 * Groups array items into a record keyed by the result of `getKey`.
 *
 * @example
 * ```ts
 * groupBy(["one", "two", "three"], (word) => word.length)
 * // { 3: ["one", "two"], 5: ["three"] }
 * ```
 */
export function groupBy(items, getKey) {
    const groups = {};
    for (const item of items) {
        const key = getKey(item);
        const existingGroup = groups[key];
        if (existingGroup) {
            existingGroup.push(item);
        }
        else {
            groups[key] = [item];
        }
    }
    return groups;
}
