/**
 * text
 */

/**
 * is dumb terminal
 */
const isDumbTerminal = process.env.TERM === "dumb"

/**
 * wrap ansi escape sequences to text
 */
const wrap = (open: number, close: number) =>
  (text: string) => isDumbTerminal ? text : `\x1b[${open}m${text}\x1b[${close}m`

/**
 * reset
 */
export const reset = wrap(0, 0)

/**
 * bold
 */
export const bold = wrap(1, 22)

/**
 * italic
 */
export const italic = wrap(3, 23)

/**
 * underline
 */
export const underline = wrap(4, 24)

/**
 * hidden
 */
export const hidden = wrap(8, 28)

/**
 * strikethrough
 */
export const strikethrough = wrap(9, 29)
