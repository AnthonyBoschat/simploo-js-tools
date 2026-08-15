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
export declare function throttle<Args extends unknown[]>(fn: (...args: Args) => void, delay: number): (...args: Args) => void;
