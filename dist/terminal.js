/**
 * terminal
 */
/**
 * terminal class
 */
class Terminal {
  /**
   * whether the terminal is an apple terminal
   */
  #isAppleTerminal = process.env.TERM_PROGRAM === "Apple_Terminal"
  /**
   * queue to be written
   */
  #queue = []
  /**
   * write to stdout.
   */
  async write() {
    for (const i of this.#queue) {
      await new Promise((resolve, reject) =>
        process.stdout.write(i, (err) =>
          err ?
            reject(new Error("failed to write stdout.", { cause: err })) :
            resolve())
      )
    }
    this.#queue.length = 0
  }
  /**
   * hide cursor.
   */
  cursorHide() {
    this.#queue.push("\x1b[?25l")
    return this
  }
  /**
   * show cursor.
   */
  cursorShow() {
    this.#queue.push("\x1b[?25h")
    return this
  }
  /**
   * save cursor position.
   */
  cursorSavePosition() {
    this.#queue.push(this.#isAppleTerminal ? "\x1b7" : "\x1b[s")
    return this
  }
  /**
   * restore saved cursor position.
   */
  cursorRestorePosition() {
    this.#queue.push(this.#isAppleTerminal ? "\x1b8" : "\x1b[u")
    return this
  }
  /**
   * get cursor position.
   */
  cursorGetPosition() {
    this.#queue.push("\x1b[6n")
    return this
  }
  /**
   * move cursor up a specific amount of rows.
   */
  cursorUp(amount = 1) {
    this.#queue.push(`\x1b[${amount}A`)
    return this
  }
  /**
   * move cursor down a specific amount of rows.
   *
   * @param amount - amount of rows
   */
  cursorDown(amount = 1) {
    this.#queue.push(`\x1b[${amount}B`)
    return this
  }
  /**
   * move cursor forward a specific amount of rows.
   *
   * @param amount - amount of rows
   */
  cursorForward(amount = 1) {
    this.#queue.push(`\x1b[${amount}C`)
    return this
  }
  /**
   * move cursor backward a specific amount of rows.
   *
   * @param amount - amount of rows
   */
  cursorBackward(amount = 1) {
    this.#queue.push(`\x1b[${amount}D`)
    return this
  }
  /**
   * move cursor to the left side.
   */
  cursorLeft() {
    this.#queue.push("\x1b[G")
    return this
  }
  /**
   * move cursor to the next line.
   */
  cursorNextLine() {
    this.#queue.push("\x1b[E")
    return this
  }
  /**
   * move cursor to the previous line.
   */
  cursorPrevLine() {
    this.#queue.push("\x1b[F")
    return this
  }
  /**
   * erase the screen from the current line up to the top of the screen.
   */
  eraseUp() {
    this.#queue.push("\x1b[1J")
    return this
  }
  /**
   * erase the screen from the current line down to the bottom of the screen.
   */
  eraseDown() {
    this.#queue.push("\x1b[J")
    return this
  }
  /**
   * erase from the current cursor position to the start of the current line.
   */
  eraseStartLine() {
    this.#queue.push("\x1b[1K")
    return this
  }
  /**
   * erase from the current cursor position to the end of the current line.
   */
  eraseEndLine() {
    this.#queue.push("\x1b[K")
    return this
  }
  /**
   * erase the entire current line.
   */
  eraseLine() {
    this.#queue.push("\x1b[2K")
    return this
  }
  /**
   * erase from the current cursor position up the specified amount of rows.
   *
   * @param amount - amount of rows
   */
  eraseLines(amount) {
    if (amount > 0) {
      let text = ""
      for (let i = 0; i < amount; i++) {
        text += "\x1b[2K" // erase line
        if (i < amount - 1) {
          text += "\x1b[1A" // cursor up
        }
      }
      text += "\x1b[G" // cursor left
      this.#queue.push(text)
    }
    return this
  }
  /**
   * erase the screen and move the cursor the top left position.
   */
  eraseScreen() {
    this.#queue.push("\x1b[2J")
    return this
  }
  /**
   * scroll display up one line.
   */
  scrollUp() {
    this.#queue.push("\x1b[S")
    return this
  }
  /**
   * scroll display down one line.
   */
  scrollDown() {
    this.#queue.push("\x1b[T")
    return this
  }
  /**
   * output a beeping sound.
   */
  beep() {
    this.#queue.push("\x07")
    return this
  }
  /**
   * clear the terminal screen.
   */
  clearScreen() {
    this.#queue.push("\x1bc")
    return this
  }
  /**
   * output text
   */
  text(...texts) {
    this.#queue.push(texts.join(" "))
    return this
  }
  /**
   * line feed
   *
   * @param amount - amount of line feed
   */
  linefeed(amount = 1) {
    this.#queue.push("\n".repeat(amount))
    return this
  }
}

export { Terminal }
