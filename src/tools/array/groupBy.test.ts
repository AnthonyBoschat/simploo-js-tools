import { describe, expect, test } from "vitest"
import { groupBy } from "./groupBy.js"

describe("groupBy", () => {

    test("Groupe les éléments selon la clé retournée", () => {
        const result = groupBy(["one", "two", "three"], (word) => word.length)
        expect(result).toEqual({ 3: ["one", "two"], 5: ["three"] })
    })

    test("Retourne un objet vide pour un tableau vide", () => {
        expect(groupBy([], (item: string) => item)).toEqual({})
    })

    test("Fonctionne avec une clé de type chaîne", () => {
        const items = [
            { type: "fruit",  name: "apple" },
            { type: "fruit",  name: "banana" },
            { type: "veggie", name: "carrot" },
        ]
        const result = groupBy(items, (item) => item.type)

        expect(result).toEqual({
            fruit:  [{ type: "fruit", name: "apple" }, { type: "fruit", name: "banana" }],
            veggie: [{ type: "veggie", name: "carrot" }],
        })
    })

})
