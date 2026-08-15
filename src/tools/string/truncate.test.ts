import { describe, expect, test } from "vitest"
import { truncate } from "./truncate.js"

describe("truncate", () => {

    test("Tronque un texte trop long avec le suffixe par défaut", () => {
        expect(truncate("Hello world", 8)).toBe("Hello w…")
    })

    test("Tronque un texte trop long avec un suffixe personnalisé", () => {
        expect(truncate("Hello world", 8, "...")).toBe("Hello...")
    })

    test("Ne tronque pas un texte déjà assez court", () => {
        expect(truncate("Hi", 10)).toBe("Hi")
    })

    test("Ne tronque pas un texte dont la longueur est exactement maxLength", () => {
        expect(truncate("Hello", 5)).toBe("Hello")
    })

    test("Gère une maxLength plus petite que le suffixe", () => {
        expect(truncate("Hello world", 0)).toBe("…")
    })

})
