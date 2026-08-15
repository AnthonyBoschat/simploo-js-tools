import { describe, expect, test } from "vitest"
import { omit } from "./omit.js"

describe("omit", () => {

    test("Retire les clés demandées", () => {
        const source = { id: 1, name: "Alice", age: 30 }
        expect(omit(source, ["age"])).toEqual({ id: 1, name: "Alice" })
    })

    test("Ne change rien si aucune clé n'est demandée", () => {
        const source = { id: 1, name: "Alice" }
        expect(omit(source, [])).toEqual({ id: 1, name: "Alice" })
    })

    test("Ne mute pas l'objet source", () => {
        const source = { id: 1, name: "Alice" }
        omit(source, ["name"])
        expect(source).toEqual({ id: 1, name: "Alice" })
    })

})
