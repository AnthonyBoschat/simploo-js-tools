import { describe, expect, test } from "vitest"
import { randomString } from "./randomString.js"

describe("randomString", () => {

    test("Génère une chaîne de la longueur demandée", () => {
        expect(randomString(10)).toHaveLength(10)
    })

    test("Retourne une chaîne vide pour une longueur de 0", () => {
        expect(randomString(0)).toBe("")
    })

    test("Ne contient que des caractères alphanumériques", () => {
        const result = randomString(200)
        expect(result).toMatch(/^[A-Za-z0-9]*$/)
    })

    test("Génère deux chaînes différentes sur des appels successifs", () => {
        const first  = randomString(32)
        const second = randomString(32)
        expect(first).not.toBe(second)
    })

})
