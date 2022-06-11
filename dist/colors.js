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
const wrap = (open, close) =>
  (text) =>
    isColorEnabled ?
      `\x1b[${open}m${text}\x1b[${close}m` :
      text
/**
 * dim
 */
const dim = wrap(2, 22)
/**
 * inverse
 */
const inverse = wrap(7, 27)
/**
 * black
 */
const black = wrap(30, 39)
/**
 * red
 */
const red = wrap(31, 39)
/**
 * green
 */
const green = wrap(32, 39)
/**
 * yellow
 */
const yellow = wrap(33, 39)
/**
 * blue
 */
const blue = wrap(34, 39)
/**
 * magenta
 */
const magenta = wrap(35, 39)
/**
 * cyan
 */
const cyan = wrap(36, 39)
/**
 * white
 */
const white = wrap(37, 39)
/**
 * gray
 */
const gray = wrap(90, 39)
/**
 * bgBlack
 */
const bgBlack = wrap(40, 49)
/**
 * bgRed
 */
const bgRed = wrap(41, 49)
/**
 * bgGreen
 */
const bgGreen = wrap(42, 49)
/**
 * bgYellow
 */
const bgYellow = wrap(43, 49)
/**
 * bgBlue
 */
const bgBlue = wrap(44, 49)
/**
 * bgMagenta
 */
const bgMagenta = wrap(45, 49)
/**
 * bgCyan
 */
const bgCyan = wrap(46, 49)
/**
 * bgWhite
 */
const bgWhite = wrap(47, 49)
/**
 * blackBright
 */
const blackBright = wrap(90, 39)
/**
 * redBright
 */
const redBright = wrap(91, 39)
/**
 * greenBright
 */
const greenBright = wrap(92, 39)
/**
 * yellowBright
 */
const yellowBright = wrap(93, 39)
/**
 * blueBright
 */
const blueBright = wrap(94, 39)
/**
 * magentaBright
 */
const magentaBright = wrap(95, 39)
/**
 * cyanBright
 */
const cyanBright = wrap(96, 39)
/**
 * whiteBright
 */
const whiteBright = wrap(97, 39)
/**
 * bgBlackBright
 */
const bgBlackBright = wrap(100, 49)
/**
 * bgRedBright
 */
const bgRedBright = wrap(101, 49)
/**
 * bgGreenBright
 */
const bgGreenBright = wrap(102, 49)
/**
 * bgYellowBright
 */
const bgYellowBright = wrap(103, 49)
/**
 * bgBlueBright
 */
const bgBlueBright = wrap(104, 49)
/**
 * bgMagentaBright
 */
const bgMagentaBright = wrap(105, 49)
/**
 * bgCyanBright
 */
const bgCyanBright = wrap(106, 49)
/**
 * bgWhiteBright
 */
const bgWhiteBright = wrap(107, 49)

export {
  bgBlack,
  bgBlackBright,
  bgBlue,
  bgBlueBright,
  bgCyan,
  bgCyanBright,
  bgGreen,
  bgGreenBright,
  bgMagenta,
  bgMagentaBright,
  bgRed,
  bgRedBright,
  bgWhite,
  bgWhiteBright,
  bgYellow,
  bgYellowBright,
  black,
  blackBright,
  blue,
  blueBright,
  cyan,
  cyanBright,
  dim,
  gray,
  green,
  greenBright,
  inverse,
  magenta,
  magentaBright,
  red,
  redBright,
  white,
  whiteBright,
  yellow,
  yellowBright,
}
