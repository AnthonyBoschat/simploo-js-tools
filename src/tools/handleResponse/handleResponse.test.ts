import { describe, expect, test, vi } from "vitest"
import { handleResponse } from "./handleResponse.js"

describe("handleResponse", () => {

    test("Appelle onSuccess avec les données quand la requête réussit", async () => {
        const onSuccess = vi.fn()
        const onError   = vi.fn()

        await handleResponse({
            request: () => Promise.resolve({ id: 1 }),
            onSuccess,
            onError,
        })

        expect(onSuccess).toHaveBeenCalledWith({ id: 1 })
        expect(onError).not.toHaveBeenCalled()
    })

    test("N'appelle pas onError quand la requête réussit", async () => {
        const onError = vi.fn()

        await handleResponse({
            request: () => Promise.resolve("ok"),
            onError,
        })

        expect(onError).not.toHaveBeenCalled()
    })

    test("Ne lève pas d'erreur quand onSuccess n'est pas fourni", async () => {
        await expect(
            handleResponse({ request: () => Promise.resolve("ok") })
        ).resolves.toBeUndefined()
    })

    test("Appelle onError avec le status et les données de l'erreur", async () => {
        const onSuccess = vi.fn()
        const onError   = vi.fn()
        const rejection = { response: { status: 404, data: { message: "Not found" } } }

        await handleResponse({
            request: () => Promise.reject(rejection),
            onSuccess,
            onError,
        })

        expect(onSuccess).not.toHaveBeenCalled()
        expect(onError).toHaveBeenCalledWith({
            status: 404,
            data:   { message: "Not found" },
            cause:  rejection,
        })
    })

    test("Normalise le status à 0 quand l'erreur n'a pas de réponse (erreur réseau)", async () => {
        const onError      = vi.fn()
        const networkError = new Error("Network Error")

        await handleResponse({
            request: () => Promise.reject(networkError),
            onError,
        })

        expect(onError).toHaveBeenCalledWith({
            status: 0,
            data:   null,
            cause:  networkError,
        })
    })

    test("Normalise data à null quand la réponse n'a pas de corps", async () => {
        const onError    = vi.fn()
        const rejection  = { response: { status: 500 } }

        await handleResponse({
            request: () => Promise.reject(rejection),
            onError,
        })

        expect(onError).toHaveBeenCalledWith({
            status: 500,
            data:   null,
            cause:  rejection,
        })
    })

    test("Ne lève pas d'erreur quand onError n'est pas fourni", async () => {
        await expect(
            handleResponse({ request: () => Promise.reject(new Error("boom")) })
        ).resolves.toBeUndefined()
    })

    test("Capture une exception synchrone levée par request", async () => {
        const onError    = vi.fn()
        const syncError  = new Error("sync failure")

        await handleResponse({
            request: () => {
                throw syncError
            },
            onError,
        })

        expect(onError).toHaveBeenCalledWith({
            status: 0,
            data:   null,
            cause:  syncError,
        })
    })

})
