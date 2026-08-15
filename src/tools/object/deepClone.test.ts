import { describe, expect, test } from "vitest"
import { deepClone } from "./deepClone.js"

describe("deepClone", () => {

    test("Copie un objet imbriqué sans partager les références", () => {
        const original = { user: { name: "Alice" } }
        const cloned   = deepClone(original)
        cloned.user.name = "Bob"

        expect(original.user.name).toBe("Alice")
        expect(cloned.user.name).toBe("Bob")
    })

    test("Copie un tableau imbriqué sans partager les références", () => {
        const original = { items: [1, 2, 3] }
        const cloned   = deepClone(original)
        cloned.items.push(4)

        expect(original.items).toEqual([1, 2, 3])
        expect(cloned.items).toEqual([1, 2, 3, 4])
    })

    test("Retourne une valeur égale mais un objet différent", () => {
        const original = { id: 1 }
        const cloned   = deepClone(original)

        expect(cloned).toEqual(original)
        expect(cloned).not.toBe(original)
    })

    test("Fonctionne avec un objet vide", () => {
        expect(deepClone({})).toEqual({})
    })

})
