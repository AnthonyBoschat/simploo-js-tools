import { describe, expect, test } from "vitest"
import { round } from "./round.js"

describe("round", () => {

    test("Arrondit à un nombre de décimales donné", () => {
        expect(round(3.14159, 2)).toBe(3.14)
    })

    test("Arrondit à l'entier le plus proche par défaut", () => {
        expect(round(2.5)).toBe(3)
    })

    test("Arrondit correctement les nombres négatifs", () => {
        expect(round(-4.6)).toBe(-5)
    })

    test("Ne change rien à un entier", () => {
        expect(round(42, 2)).toBe(42)
    })

    test("Fonctionne avec 0 décimale explicite", () => {
        expect(round(9.9, 0)).toBe(10)
    })

})
