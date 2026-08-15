export { sleep } from "./sleep.js";
export { debounce } from "./debounce.js";
export { throttle } from "./throttle.js";
export { retry } from "./retry.js";
import { sleep } from "./sleep.js";
import { debounce } from "./debounce.js";
import { throttle } from "./throttle.js";
import { retry } from "./retry.js";
/** Async control-flow utilities. */
export declare const async: {
    readonly sleep: typeof sleep;
    readonly debounce: typeof debounce;
    readonly throttle: typeof throttle;
    readonly retry: typeof retry;
};
