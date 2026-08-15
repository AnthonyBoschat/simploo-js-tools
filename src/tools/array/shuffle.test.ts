import { describe, expect, test } from "vitest"
import { shuffle } from "./shuffle.js"

describe("shuffle", () => {

    test("Retourne un tableau contenant les mêmes éléments", () => {
        const original = [1, 2, 3, 4, 5]
        const result   = shuffle(original)

        expect(result).toHaveLength(original.length)
        expect(result.sort()).toEqual([...original].sort())
    })

    test("Ne mute pas le tableau original", () => {
        const original = [1, 2, 3, 4, 5]
        shuffle(original)

        expect(original).toEqual([1, 2, 3, 4, 5])
    })

    test("Retourne un tableau vide pour un tableau vide", () => {
        expect(shuffle([])).toEqual([])
    })

    test("Retourne un tableau à un seul élément inchangé", () => {
        expect(shuffle([42])).toEqual([42])
    })

})
