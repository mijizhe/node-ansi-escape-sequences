/**
 * colors
 */

/**
 * is no color
 */
const isNoColor = "NO_COLOR" in process.env

/**
 * is force color
 */
const isForceColor = "FORCE_COLOR" in process.env

/**
 * is dumb terminal
 */
const isDumbTerminal = process.env.TERM === "dumb"

/**
 * is color enabled
 */
const isColorEnabled = !isDumbTerminal && (isForceColor || !isNoColor)

/**
 * wrap ansi escape sequences to text
 */
const wrap = (open: number, close: number) =>
  (text: string) =>
    isColorEnabled ?
      `\x1b[${open}m${text}\x1b[${close}m` :
      text

/**
 * dim
 */
export const dim = wrap(2, 22)

/**
 * inverse
 */
export const inverse = wrap(7, 27)

/**
 * black
 */
export const black = wrap(30, 39)

/**
 * red
 */
export const red = wrap(31, 39)

/**
 * green
 */
export const green = wrap(32, 39)

/**
 * yellow
 */
export const yellow = wrap(33, 39)

/**
 * blue
 */
export const blue = wrap(34, 39)

/**
 * magenta
 */
export const magenta = wrap(35, 39)

/**
 * cyan
 */
export const cyan = wrap(36, 39)

/**
 * white
 */
export const white = wrap(37, 39)

/**
 * gray
 */
export const gray = wrap(90, 39)

/**
 * bgBlack
 */
export const bgBlack = wrap(40, 49)

/**
 * bgRed
 */
export const bgRed = wrap(41, 49)

/**
 * bgGreen
 */
export const bgGreen = wrap(42, 49)

/**
 * bgYellow
 */
export const bgYellow = wrap(43, 49)

/**
 * bgBlue
 */
export const bgBlue = wrap(44, 49)

/**
 * bgMagenta
 */
export const bgMagenta = wrap(45, 49)

/**
 * bgCyan
 */
export const bgCyan = wrap(46, 49)

/**
 * bgWhite
 */
export const bgWhite = wrap(47, 49)

/**
 * blackBright
 */
export const blackBright = wrap(90, 39)

/**
 * redBright
 */
export const redBright = wrap(91, 39)

/**
 * greenBright
 */
export const greenBright = wrap(92, 39)

/**
 * yellowBright
 */
export const yellowBright = wrap(93, 39)

/**
 * blueBright
 */
export const blueBright = wrap(94, 39)

/**
 * magentaBright
 */
export const magentaBright = wrap(95, 39)

/**
 * cyanBright
 */
export const cyanBright = wrap(96, 39)

/**
 * whiteBright
 */
export const whiteBright = wrap(97, 39)

/**
 * bgBlackBright
 */
export const bgBlackBright = wrap(100, 49)

/**
 * bgRedBright
 */
export const bgRedBright = wrap(101, 49)

/**
 * bgGreenBright
 */
export const bgGreenBright = wrap(102, 49)

/**
 * bgYellowBright
 */
export const bgYellowBright = wrap(103, 49)

/**
 * bgBlueBright
 */
export const bgBlueBright = wrap(104, 49)

/**
 * bgMagentaBright
 */
export const bgMagentaBright = wrap(105, 49)

/**
 * bgCyanBright
 */
export const bgCyanBright = wrap(106, 49)

/**
 * bgWhiteBright
 */
export const bgWhiteBright = wrap(107, 49)
