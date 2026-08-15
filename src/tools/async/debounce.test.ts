import { afterEach, beforeEach, describe, expect, test, vi } from "vitest"
import { debounce } from "./debounce.js"

describe("debounce", () => {

    beforeEach(() => {
        vi.useFakeTimers()
    })

    afterEach(() => {
        vi.useRealTimers()
    })

    test("N'exécute la fonction qu'après le délai sans nouvel appel", () => {
        const fn = vi.fn()
        const debouncedFn = debounce(fn, 300)

        debouncedFn()
        vi.advanceTimersByTime(200)
        debouncedFn()
        vi.advanceTimersByTime(200)
        expect(fn).not.toHaveBeenCalled()

        vi.advanceTimersByTime(100)
        expect(fn).toHaveBeenCalledTimes(1)
    })

    test("Transmet les arguments du dernier appel", () => {
        const fn = vi.fn()
        const debouncedFn = debounce(fn, 300)

        debouncedFn("a")
        debouncedFn("b")
        vi.advanceTimersByTime(300)

        expect(fn).toHaveBeenCalledWith("b")
        expect(fn).toHaveBeenCalledTimes(1)
    })

    test("Exécute la fonction si aucun nouvel appel n'interrompt le délai", () => {
        const fn = vi.fn()
        const debouncedFn = debounce(fn, 300)

        debouncedFn()
        vi.advanceTimersByTime(300)

        expect(fn).toHaveBeenCalledTimes(1)
    })

})
