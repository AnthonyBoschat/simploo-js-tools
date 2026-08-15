import { describe, expect, test } from "vitest"
import { capitalize } from "./capitalize.js"

describe("capitalize", () => {

    test("Met en majuscule la première lettre d'un mot en minuscules", () => {
        expect(capitalize("hello")).toBe("Hello")
    })

    test("Retourne une chaîne vide pour une chaîne vide", () => {
        expect(capitalize("")).toBe("")
    })

    test("Ne change rien si la première lettre est déjà en majuscule", () => {
        expect(capitalize("Hello")).toBe("Hello")
    })

    test("Fonctionne avec une chaîne d'un seul caractère", () => {
        expect(capitalize("h")).toBe("H")
    })

    test("Ne modifie pas une chaîne qui commence par un chiffre", () => {
        expect(capitalize("123abc")).toBe("123abc")
    })

})
