import { describe, expect, test } from "vitest"
import { removeAccents } from "./removeAccents.js"

describe("removeAccents", () => {

    test("Retire les accents d'une phrase", () => {
        expect(removeAccents("crème brûlée")).toBe("creme brulee")
    })

    test("Retire l'accent d'un mot simple", () => {
        expect(removeAccents("café")).toBe("cafe")
    })

    test("Retourne une chaîne vide pour une chaîne vide", () => {
        expect(removeAccents("")).toBe("")
    })

    test("Ne modifie pas une chaîne sans accent", () => {
        expect(removeAccents("hello")).toBe("hello")
    })

    test("Retire plusieurs types d'accents différents", () => {
        expect(removeAccents("àéîöù")).toBe("aeiou")
    })

})
