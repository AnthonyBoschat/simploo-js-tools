import { describe, expect, test } from "vitest"
import { pick } from "./pick.js"

describe("pick", () => {

    test("Ne garde que les clés demandées", () => {
        const source = { id: 1, name: "Alice", age: 30 }
        expect(pick(source, ["id", "name"])).toEqual({ id: 1, name: "Alice" })
    })

    test("Retourne un objet vide si aucune clé n'est demandée", () => {
        const source = { id: 1, name: "Alice" }
        expect(pick(source, [])).toEqual({})
    })

    test("Ne mute pas l'objet source", () => {
        const source = { id: 1, name: "Alice" }
        pick(source, ["id"])
        expect(source).toEqual({ id: 1, name: "Alice" })
    })

})
