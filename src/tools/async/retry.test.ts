import { describe, expect, test, vi } from "vitest"
import { retry } from "./retry.js"

describe("retry", () => {

    test("Retourne le résultat si le premier essai réussit", async () => {
        const fn     = vi.fn().mockResolvedValue("success")
        const result = await retry(fn, 3)

        expect(result).toBe("success")
        expect(fn).toHaveBeenCalledTimes(1)
    })

    test("Réessaie jusqu'à ce que la fonction réussisse", async () => {
        const fn = vi.fn()
            .mockRejectedValueOnce(new Error("fail 1"))
            .mockRejectedValueOnce(new Error("fail 2"))
            .mockResolvedValueOnce("success")

        const result = await retry(fn, 3)

        expect(result).toBe("success")
        expect(fn).toHaveBeenCalledTimes(3)
    })

    test("Rejette avec la dernière erreur si tous les essais échouent", async () => {
        const lastError = new Error("final failure")
        const fn = vi.fn()
            .mockRejectedValueOnce(new Error("fail 1"))
            .mockRejectedValueOnce(lastError)

        await expect(retry(fn, 2)).rejects.toBe(lastError)
        expect(fn).toHaveBeenCalledTimes(2)
    })

    test("Attend delayMs entre chaque essai", async () => {
        vi.useFakeTimers()
        const fn = vi.fn()
            .mockRejectedValueOnce(new Error("fail"))
            .mockResolvedValueOnce("success")

        const resultPromise = retry(fn, 2, 500)
        await vi.advanceTimersByTimeAsync(500)
        const result = await resultPromise

        expect(result).toBe("success")
        vi.useRealTimers()
    })

})
