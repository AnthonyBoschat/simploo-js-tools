export type PasswordCheck = {
    valid: boolean
    errors: string[]
}

export type PasswordOptions = {
    minLength?:         number
    requireLowercase?:  boolean
    requireUppercase?:  boolean
    requireDigit?:      boolean
    requireSpecial?:    boolean
}

const DEFAULT_OPTIONS: Required<PasswordOptions> = {
    minLength:          12,
    requireLowercase:   true,
    requireUppercase:   true,
    requireDigit:       true,
    requireSpecial:     true,
}

const LOWERCASE_REGEX   = /[a-z]/
const UPPERCASE_REGEX   = /[A-Z]/
const DIGIT_REGEX       = /\d/
const SPECIAL_REGEX     = /[#?!@$%^&*\-'+()_[\]]/

/**
 * Validates a password and returns the list of failed rules.
 * Useful for showing precise feedback in a form.
 *
 * @example
 * ```ts
 * checkPassword("abc")
 * // { valid: false, errors: ["Too short (min 12)", "Missing uppercase", "Missing digit", "Missing special character"] }
 * ```
 */
export function checkPassword(password: string, options: PasswordOptions = {}): PasswordCheck  {
    const config = { ...DEFAULT_OPTIONS, ...options }
    const errors: string[] = []

    if(password.length < config.minLength){
        errors.push(`Too short (min ${config.minLength})`)
    }
    if(config.requireLowercase && !LOWERCASE_REGEX.test(password)){
        errors.push("Missing lowercase")
    } 
    if(config.requireUppercase && !UPPERCASE_REGEX.test(password)){
        errors.push("Missing uppercase")
    } 
    if(config.requireDigit && !DIGIT_REGEX.test(password)){
        errors.push("Missing digit")
    } 
    if(config.requireSpecial && !SPECIAL_REGEX.test(password)){
        errors.push("Missing special character")
    }

    return { valid: errors.length === 0, errors }
}