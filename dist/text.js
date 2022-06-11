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
const wrap = (open, close) => (text) => isDumbTerminal ? text : `\x1b[${open}m${text}\x1b[${close}m`
/**
 * reset
 */
const reset = wrap(0, 0)
/**
 * bold
 */
const bold = wrap(1, 22)
/**
 * italic
 */
const italic = wrap(3, 23)
/**
 * underline
 */
const underline = wrap(4, 24)
/**
 * hidden
 */
const hidden = wrap(8, 28)
/**
 * strikethrough
 */
const strikethrough = wrap(9, 29)

export { bold, hidden, italic, reset, strikethrough, underline }
