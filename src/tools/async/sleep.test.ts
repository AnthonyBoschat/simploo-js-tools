import { afterEach, beforeEach, describe, expect, test, vi } from "vitest"
import { sleep } from "./sleep.js"

describe("sleep", () => {

    beforeEach(() => {
        vi.useFakeTimers()
    })

    afterEach(() => {
        vi.useRealTimers()
    })

    test("Résout après le délai indiqué", async () => {
        let resolved = false
        sleep(1000).then(() => {
            resolved = true
        })

        await vi.advanceTimersByTimeAsync(1000)
        expect(resolved).toBe(true)
    })

    test("Ne résout pas avant la fin du délai", async () => {
        let resolved = false
        sleep(1000).then(() => {
            resolved = true
        })

        await vi.advanceTimersByTimeAsync(500)
        expect(resolved).toBe(false)
    })

})
