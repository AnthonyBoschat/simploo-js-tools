import { describe, expect, test } from "vitest"
import { unique } from "./unique.js"

describe("unique", () => {

    test("Retire les doublons d'un tableau de nombres", () => {
        expect(unique([1, 2, 2, 3, 1])).toEqual([1, 2, 3])
    })

    test("Retourne un tableau vide pour un tableau vide", () => {
        expect(unique([])).toEqual([])
    })

    test("Ne change rien à un tableau déjà sans doublon", () => {
        expect(unique(["a", "b", "c"])).toEqual(["a", "b", "c"])
    })

    test("Fonctionne avec des chaînes de caractères", () => {
        expect(unique(["a", "b", "a", "c", "b"])).toEqual(["a", "b", "c"])
    })

    test("Préserve l'ordre de première apparition", () => {
        expect(unique([3, 1, 3, 2, 1])).toEqual([3, 1, 2])
    })

})
