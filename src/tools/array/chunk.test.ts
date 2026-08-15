import { describe, expect, test } from "vitest"
import { chunk } from "./chunk.js"

describe("chunk", () => {

    test("Découpe un tableau en sous-tableaux de taille donnée", () => {
        expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
    })

    test("Retourne un tableau vide pour un tableau vide", () => {
        expect(chunk([], 2)).toEqual([])
    })

    test("Retourne un seul chunk si la taille dépasse la longueur du tableau", () => {
        expect(chunk([1, 2], 5)).toEqual([[1, 2]])
    })

    test("Fonctionne avec une taille de 1", () => {
        expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]])
    })

})
