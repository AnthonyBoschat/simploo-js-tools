import { describe, expect, test } from "vitest"
import { clamp } from "./clamp.js"

describe("clamp", () => {

    test("Retourne la valeur inchangée si elle est dans les bornes", () => {
        expect(clamp(5, 0, 10)).toBe(5)
    })

    test("Ramène la valeur au maximum si elle le dépasse", () => {
        expect(clamp(15, 0, 10)).toBe(10)
    })

    test("Ramène la valeur au minimum si elle est en dessous", () => {
        expect(clamp(-5, 0, 10)).toBe(0)
    })

    test("Retourne la borne exacte quand la valeur l'atteint", () => {
        expect(clamp(10, 0, 10)).toBe(10)
    })

    test("Fonctionne avec des bornes négatives", () => {
        expect(clamp(-20, -10, -5)).toBe(-10)
    })

})
