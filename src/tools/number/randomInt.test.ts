import { describe, expect, test } from "vitest"
import { randomInt } from "./randomInt.js"

describe("randomInt", () => {

    test("Retourne toujours un entier compris dans les bornes", () => {
        for (let attempt = 0; attempt < 100; attempt++) {
            const result = randomInt(1, 6)
            expect(Number.isInteger(result)).toBe(true)
            expect(result).toBeGreaterThanOrEqual(1)
            expect(result).toBeLessThanOrEqual(6)
        }
    })

    test("Retourne la seule valeur possible quand min égale max", () => {
        expect(randomInt(5, 5)).toBe(5)
    })

    test("Fonctionne avec des bornes négatives", () => {
        for (let attempt = 0; attempt < 50; attempt++) {
            const result = randomInt(-10, -5)
            expect(result).toBeGreaterThanOrEqual(-10)
            expect(result).toBeLessThanOrEqual(-5)
        }
    })

})
