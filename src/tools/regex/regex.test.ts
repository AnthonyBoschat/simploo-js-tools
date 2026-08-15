import { describe, expect, test } from "vitest"
import { REGEX } from "./regex.js"

describe("REGEX.email", () => {

    test("Valide une adresse email standard", () => {
        expect(REGEX.email.test("user@domain.com")).toBe(true)
    })

    test("Valide une adresse email avec sous-domaine, point et tag", () => {
        expect(REGEX.email.test("user.name+tag@sub.domain.com")).toBe(true)
    })

    test("Rejette une adresse sans extension de domaine", () => {
        expect(REGEX.email.test("user@domain")).toBe(false)
    })

    test("Rejette une adresse sans arobase", () => {
        expect(REGEX.email.test("user.domain.com")).toBe(false)
    })

})

describe("REGEX.phone", () => {

    test("Valide un numéro international avec séparateurs", () => {
        expect(REGEX.phone.test("+33 6 12 34 56 78")).toBe(true)
    })

    test("Valide un numéro au format américain avec parenthèses", () => {
        expect(REGEX.phone.test("(555) 123-4567")).toBe(true)
    })

    test("Valide un numéro avec séparateurs points", () => {
        expect(REGEX.phone.test("555.123.4567")).toBe(true)
    })

    test("Rejette une chaîne contenant des lettres", () => {
        expect(REGEX.phone.test("06 12 34 56 AB")).toBe(false)
    })

})

describe("REGEX.frenchPhone", () => {

    test("Valide un numéro français commençant par 0", () => {
        expect(REGEX.frenchPhone.test("06 12 34 56 78")).toBe(true)
    })

    test("Valide un numéro français au format +33", () => {
        expect(REGEX.frenchPhone.test("+33612345678")).toBe(true)
    })

    test("Rejette un numéro qui ne commence ni par 0 ni par +33/0033", () => {
        expect(REGEX.frenchPhone.test("612345678")).toBe(false)
    })

    test("Rejette un numéro avec un nombre de chiffres incorrect", () => {
        expect(REGEX.frenchPhone.test("06 12 34 56")).toBe(false)
    })

})

describe("REGEX.url", () => {

    test("Valide une URL https avec chemin et query string", () => {
        expect(REGEX.url.test("https://domain.com/path?q=1")).toBe(true)
    })

    test("Valide une URL http simple", () => {
        expect(REGEX.url.test("http://domain.com")).toBe(true)
    })

    test("Rejette un protocole ftp", () => {
        expect(REGEX.url.test("ftp://host")).toBe(false)
    })

})

describe("REGEX.dateFr", () => {

    test("Valide une date au format JJ/MM/AAAA", () => {
        expect(REGEX.dateFr.test("25/12/2026")).toBe(true)
    })

    test("Rejette une date au format ISO", () => {
        expect(REGEX.dateFr.test("2026-12-25")).toBe(false)
    })

})

describe("REGEX.dateIso", () => {

    test("Valide une date au format AAAA-MM-JJ", () => {
        expect(REGEX.dateIso.test("2026-12-25")).toBe(true)
    })

    test("Rejette une date au format français", () => {
        expect(REGEX.dateIso.test("25/12/2026")).toBe(false)
    })

})

describe("REGEX.time24h", () => {

    test("Valide une heure limite valide", () => {
        expect(REGEX.time24h.test("23:59")).toBe(true)
    })

    test("Valide une heure de minuit", () => {
        expect(REGEX.time24h.test("00:00")).toBe(true)
    })

    test("Rejette une heure invalide (24:00)", () => {
        expect(REGEX.time24h.test("24:00")).toBe(false)
    })

})

describe("REGEX.uuid", () => {

    test("Valide un UUID v4", () => {
        expect(REGEX.uuid.test("d9428888-122b-41f4-8007-8a1c3e05a3f1")).toBe(true)
    })

    test("Valide un UUID v4 généré aléatoirement", () => {
        expect(REGEX.uuid.test(crypto.randomUUID())).toBe(true)
    })

    test("Rejette une chaîne qui n'est pas un UUID", () => {
        expect(REGEX.uuid.test("not-a-uuid")).toBe(false)
    })

})

describe("REGEX.hexColor", () => {

    test("Valide une couleur hexadécimale sur 3 chiffres", () => {
        expect(REGEX.hexColor.test("#fff")).toBe(true)
    })

    test("Valide une couleur hexadécimale sur 6 chiffres", () => {
        expect(REGEX.hexColor.test("#1a2b3c")).toBe(true)
    })

    test("Rejette une couleur sans le #", () => {
        expect(REGEX.hexColor.test("fff")).toBe(false)
    })

})

describe("REGEX.frenchZipCode", () => {

    test("Valide un code postal français valide", () => {
        expect(REGEX.frenchZipCode.test("75001")).toBe(true)
    })

    test("Rejette un code postal hors plage (00100)", () => {
        expect(REGEX.frenchZipCode.test("00100")).toBe(false)
    })

})

describe("REGEX.slug", () => {

    test("Valide un slug avec chiffres et tirets", () => {
        expect(REGEX.slug.test("my-blog-post-2026")).toBe(true)
    })

    test("Rejette un slug avec des majuscules et des espaces", () => {
        expect(REGEX.slug.test("My Post")).toBe(false)
    })

    test("Rejette un slug avec des tirets consécutifs", () => {
        expect(REGEX.slug.test("my--post")).toBe(false)
    })

})

describe("REGEX.integer", () => {

    test("Valide un entier positif", () => {
        expect(REGEX.integer.test("42")).toBe(true)
    })

    test("Valide un entier négatif", () => {
        expect(REGEX.integer.test("-17")).toBe(true)
    })

    test("Rejette un nombre décimal", () => {
        expect(REGEX.integer.test("3.14")).toBe(false)
    })

})

describe("REGEX.decimal", () => {

    test("Valide un nombre décimal avec point", () => {
        expect(REGEX.decimal.test("3.14")).toBe(true)
    })

    test("Valide un nombre décimal avec virgule", () => {
        expect(REGEX.decimal.test("3,14")).toBe(true)
    })

    test("Valide un entier", () => {
        expect(REGEX.decimal.test("42")).toBe(true)
    })

})
