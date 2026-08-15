import { describe, expect, test } from "vitest"
import { formatNumber } from "./formatNumber.js"

describe("formatNumber", () => {

    test("Formate un nombre avec les séparateurs de milliers en fr-FR par défaut", () => {
        const expected = new Intl.NumberFormat("fr-FR").format(1234567)
        expect(formatNumber(1234567)).toBe(expected)
    })

    test("Formate un nombre selon la locale fournie", () => {
        expect(formatNumber(1234567, "en-US")).toBe("1,234,567")
    })

    test("Formate un petit nombre sans séparateur", () => {
        expect(formatNumber(42)).toBe("42")
    })

    test("Formate zéro", () => {
        expect(formatNumber(0)).toBe("0")
    })

})
