import { describe, expect, test } from "vitest"
import { withClass } from "./withClass.js"

describe("withClass", () => {

    test("Retourne les classes passées en paramètres", () => {
        const result = withClass("classA", "classB", "classC")
        expect(result).toBe("classA classB classC")
    })

    test("Garde une classe conditionnelle truthy", () => {
        const condition = true
        const result = withClass("classA", "classB", condition && "classC")
        expect(result).toBe("classA classB classC")
    })

    test("Ignore une classe conditionnelle falsy", () => {
        const condition = false
        const result = withClass("classA", "classB", condition && "classC")
        expect(result).toBe("classA classB")
    })

    test("Ignore false, null, undefined et 0", () => {
        const result = withClass("classA", false, null, undefined, 0, "classB")
        expect(result).toBe("classA classB")
    })

    test("Ignore les chaînes vides", () => {
        const result = withClass("classA", "", "classB")
        expect(result).toBe("classA classB")
    })

    test("Retourne une chaîne vide sans argument", () => {
        const result = withClass()
        expect(result).toBe("")
    })

    test("Retourne une chaîne vide si toutes les valeurs sont falsy", () => {
        const result = withClass(false, null, undefined, 0, "")
        expect(result).toBe("")
    })

    test("Fonctionne avec une seule classe", () => {
        const result = withClass("classA")
        expect(result).toBe("classA")
    })

})