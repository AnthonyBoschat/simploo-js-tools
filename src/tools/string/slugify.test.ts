import { describe, expect, test } from "vitest"
import { slugify } from "./slugify.js"

describe("slugify", () => {

    test("Transforme un titre en slug", () => {
        expect(slugify("Mon Article 2026!")).toBe("mon-article-2026")
    })

    test("Retire les accents et collapse les espaces multiples", () => {
        expect(slugify("  Café  &  Thé  ")).toBe("cafe-the")
    })

    test("Retourne une chaîne vide pour une chaîne vide", () => {
        expect(slugify("")).toBe("")
    })

    test("Ne laisse pas de tiret en début ou fin", () => {
        expect(slugify("---test---")).toBe("test")
    })

    test("Ne produit jamais de tirets consécutifs", () => {
        expect(slugify("a   b")).toBe("a-b")
    })

})
