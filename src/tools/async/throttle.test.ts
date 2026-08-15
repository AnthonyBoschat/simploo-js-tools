import { afterEach, beforeEach, describe, expect, test, vi } from "vitest"
import { throttle } from "./throttle.js"

describe("throttle", () => {

    beforeEach(() => {
        vi.useFakeTimers()
    })

    afterEach(() => {
        vi.useRealTimers()
    })

    test("Exécute le premier appel immédiatement", () => {
        const fn = vi.fn()
        const throttledFn = throttle(fn, 200)

        throttledFn()

        expect(fn).toHaveBeenCalledTimes(1)
    })

    test("Ignore les appels pendant la période de délai", () => {
        const fn = vi.fn()
        const throttledFn = throttle(fn, 200)

        throttledFn()
        throttledFn()
        throttledFn()

        expect(fn).toHaveBeenCalledTimes(1)
    })

    test("Autorise un nouvel appel après le délai", () => {
        const fn = vi.fn()
        const throttledFn = throttle(fn, 200)

        throttledFn()
        vi.advanceTimersByTime(200)
        throttledFn()

        expect(fn).toHaveBeenCalledTimes(2)
    })

})
