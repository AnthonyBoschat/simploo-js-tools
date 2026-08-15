import { describe, expect, test } from "vitest"
import { isEmpty } from "./isEmpty.js"

describe("isEmpty", () => {

    test("Retourne true pour une chaîne vide", () => {
        expect(isEmpty("")).toBe(true)
    })

    test("Retourne true pour null", () => {
        expect(isEmpty(null)).toBe(true)
    })

    test("Retourne true pour undefined", () => {
        expect(isEmpty(undefined)).toBe(true)
    })

    test("Retourne true pour un tableau vide", () => {
        expect(isEmpty([])).toBe(true)
    })

    test("Retourne true pour un objet vide", () => {
        expect(isEmpty({})).toBe(true)
    })

    test("Retourne false pour une chaîne non vide", () => {
        expect(isEmpty("hello")).toBe(false)
    })

    test("Retourne false pour un objet avec des clés", () => {
        expect(isEmpty({ id: 1 })).toBe(false)
    })

    test("Retourne false pour le nombre 0", () => {
        expect(isEmpty(0)).toBe(false)
    })

})
