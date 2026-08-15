/**
 * Returns a throttled version of `fn` that runs at most once every
 * `delay` milliseconds. The first call runs immediately.
 *
 * @example
 * ```ts
 * const throttledScroll = throttle(() => updatePosition(), 200)
 * window.addEventListener("scroll", throttledScroll)
 * ```
 */
export function throttle<Args extends unknown[]>(fn: (...args: Args) => void, delay: number): (...args: Args) => void {
    let isThrottled = false

    return (...args: Args) => {
        if (isThrottled) return

        fn(...args)
        isThrottled = true
        setTimeout(() => {
            isThrottled = false
        }, delay)
    }
}
