import { withClass } from "./tools/withClass/withClass.js"
import { checkPassword } from "./tools/checkPassword/checkPassword.js"
import { REGEX } from "./tools/regex/regex.js"
import { handleResponse } from "./tools/handleResponse/handleResponse.js"
import { string } from "./tools/string/index.js"
import { number } from "./tools/number/index.js"
import { array } from "./tools/array/index.js"
import { object } from "./tools/object/index.js"
import { async } from "./tools/async/index.js"

export { withClass, type ClassValue } from "./tools/withClass/withClass.js"
export { checkPassword, type PasswordCheck, type PasswordOptions } from "./tools/checkPassword/checkPassword.js"
export { REGEX } from "./tools/regex/regex.js"
export { handleResponse, type RequestError, type HandleResponseOptions } from "./tools/handleResponse/handleResponse.js"

export { string } from "./tools/string/index.js"
export { number } from "./tools/number/index.js"
export { array } from "./tools/array/index.js"
export { object } from "./tools/object/index.js"
export { async } from "./tools/async/index.js"

export * from "./tools/string/index.js"
export * from "./tools/number/index.js"
export * from "./tools/array/index.js"
export * from "./tools/object/index.js"
export * from "./tools/async/index.js"

/** All simploo utilities under a single namespace. */
export const simploo = {
    withClass,
    checkPassword,
    REGEX,
    handleResponse,
    string,
    number,
    array,
    object,
    async,
} as const