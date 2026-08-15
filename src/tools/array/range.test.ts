import { describe, expect, test } from "vitest"
import { range } from "./range.js"

describe("range", () => {

    test("Génère un tableau d'entiers de start à end inclus", () => {
        expect(range(1, 5)).toEqual([1, 2, 3, 4, 5])
    })

    test("Retourne un tableau à un seul élément quand start égale end", () => {
        expect(range(5, 5)).toEqual([5])
    })

    test("Retourne un tableau vide quand start est supérieur à end", () => {
        expect(range(5, 1)).toEqual([])
    })

    test("Fonctionne avec des valeurs négatives", () => {
        expect(range(-2, 2)).toEqual([-2, -1, 0, 1, 2])
    })

})
