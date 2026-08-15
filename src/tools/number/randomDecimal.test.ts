import { describe, expect, test } from "vitest"
import { randomDecimal } from "./randomDecimal.js"

describe("randomDecimal", () => {

    test("Retourne toujours une valeur comprise dans les bornes", () => {
        for (let attempt = 0; attempt < 100; attempt++) {
            const result = randomDecimal(0, 10)
            expect(result).toBeGreaterThanOrEqual(0)
            expect(result).toBeLessThanOrEqual(10)
        }
    })

    test("Respecte le nombre de décimales par défaut", () => {
        const result      = randomDecimal(0, 100)
        const decimalPart = result.toString().split(".")[1] ?? ""
        expect(decimalPart.length).toBeLessThanOrEqual(2)
    })

    test("Respecte un nombre de décimales personnalisé", () => {
        const result = randomDecimal(0, 100, 0)
        expect(Number.isInteger(result)).toBe(true)
    })

    test("Retourne la seule valeur possible quand min égale max", () => {
        expect(randomDecimal(5, 5)).toBe(5)
    })

})
