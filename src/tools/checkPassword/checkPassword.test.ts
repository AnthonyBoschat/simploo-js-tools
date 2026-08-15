import { describe, expect, test } from "vitest"
import { checkPassword } from "./checkPassword.js"

describe("checkPassword", () => {

    test("Valide un mot de passe qui respecte toutes les règles par défaut", () => {
        const result = checkPassword("Abcdefghij1!")
        expect(result).toEqual({ valid: true, errors: [] })
    })

    test("Rejette un mot de passe trop court", () => {
        const result = checkPassword("Ab1!")
        expect(result.valid).toBe(false)
        expect(result.errors).toContain("Too short (min 12)")
    })

    test("Rejette un mot de passe sans minuscule", () => {
        const result = checkPassword("ABCDEFGHIJ1!")
        expect(result.valid).toBe(false)
        expect(result.errors).toContain("Missing lowercase")
    })

    test("Rejette un mot de passe sans majuscule", () => {
        const result = checkPassword("abcdefghij1!")
        expect(result.valid).toBe(false)
        expect(result.errors).toContain("Missing uppercase")
    })

    test("Rejette un mot de passe sans chiffre", () => {
        const result = checkPassword("Abcdefghij!!")
        expect(result.valid).toBe(false)
        expect(result.errors).toContain("Missing digit")
    })

    test("Rejette un mot de passe sans caractère spécial", () => {
        const result = checkPassword("Abcdefghij12")
        expect(result.valid).toBe(false)
        expect(result.errors).toContain("Missing special character")
    })

    test("Cumule toutes les erreurs pour un mot de passe très faible", () => {
        const result = checkPassword("abc")
        expect(result).toEqual({
            valid: false,
            errors: [
                "Too short (min 12)",
                "Missing uppercase",
                "Missing digit",
                "Missing special character",
            ],
        })
    })

    test("Respecte une minLength personnalisée", () => {
        const result = checkPassword("Ab1!", { minLength: 4 })
        expect(result.errors).not.toContain("Too short (min 4)")
    })

    test("Ignore la règle de majuscule quand requireUppercase est désactivé", () => {
        const result = checkPassword("abcdefghij1!", { requireUppercase: false })
        expect(result.errors).not.toContain("Missing uppercase")
    })

    test("Ignore la règle de minuscule quand requireLowercase est désactivé", () => {
        const result = checkPassword("ABCDEFGHIJ1!", { requireLowercase: false })
        expect(result.errors).not.toContain("Missing lowercase")
    })

    test("Ignore la règle de chiffre quand requireDigit est désactivé", () => {
        const result = checkPassword("Abcdefghij!!", { requireDigit: false })
        expect(result.errors).not.toContain("Missing digit")
    })

    test("Ignore la règle de caractère spécial quand requireSpecial est désactivé", () => {
        const result = checkPassword("Abcdefghij12", { requireSpecial: false })
        expect(result.errors).not.toContain("Missing special character")
    })

    test("Valide une chaîne vide quand toutes les règles sont désactivées", () => {
        const result = checkPassword("", {
            minLength:          0,
            requireLowercase:   false,
            requireUppercase:   false,
            requireDigit:       false,
            requireSpecial:     false,
        })
        expect(result).toEqual({ valid: true, errors: [] })
    })

})
