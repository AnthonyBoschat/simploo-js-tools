export { capitalize } from "./capitalize.js";
export { slugify } from "./slugify.js";
export { truncate } from "./truncate.js";
export { removeAccents } from "./removeAccents.js";
export { randomString } from "./randomString.js";
import { capitalize } from "./capitalize.js";
import { slugify } from "./slugify.js";
import { truncate } from "./truncate.js";
import { removeAccents } from "./removeAccents.js";
import { randomString } from "./randomString.js";
/** String manipulation utilities. */
export declare const string: {
    readonly capitalize: typeof capitalize;
    readonly slugify: typeof slugify;
    readonly truncate: typeof truncate;
    readonly removeAccents: typeof removeAccents;
    readonly randomString: typeof randomString;
};
