export { unique } from "./unique.js"
export { chunk } from "./chunk.js"
export { groupBy } from "./groupBy.js"
export { shuffle } from "./shuffle.js"
export { range } from "./range.js"

import { unique } from "./unique.js"
import { chunk } from "./chunk.js"
import { groupBy } from "./groupBy.js"
import { shuffle } from "./shuffle.js"
import { range } from "./range.js"

/** Array manipulation utilities. */
export const array = {
    unique,
    chunk,
    groupBy,
    shuffle,
    range,
} as const
