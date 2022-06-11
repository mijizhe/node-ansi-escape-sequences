/**
 * terminal
 */
/**
 * terminal class
 */
declare class Terminal {
  #private
  /**
   * write to stdout.
   */
  write(): Promise<void>
  /**
   * hide cursor.
   */
  cursorHide(): this
  /**
   * show cursor.
   */
  cursorShow(): this
  /**
   * save cursor position.
   */
  cursorSavePosition(): this
  /**
   * restore saved cursor position.
   */
  cursorRestorePosition(): this
  /**
   * get cursor position.
   */
  cursorGetPosition(): this
  /**
   * move cursor up a specific amount of rows.
   */
  cursorUp(amount?: number): this
  /**
   * move cursor down a specific amount of rows.
   *
   * @param amount - amount of rows
   */
  cursorDown(amount?: number): this
  /**
   * move cursor forward a specific amount of rows.
   *
   * @param amount - amount of rows
   */
  cursorForward(amount?: number): this
  /**
   * move cursor backward a specific amount of rows.
   *
   * @param amount - amount of rows
   */
  cursorBackward(amount?: number): this
  /**
   * move cursor to the left side.
   */
  cursorLeft(): this
  /**
   * move cursor to the next line.
   */
  cursorNextLine(): this
  /**
   * move cursor to the previous line.
   */
  cursorPrevLine(): this
  /**
   * erase the screen from the current line up to the top of the screen.
   */
  eraseUp(): this
  /**
   * erase the screen from the current line down to the bottom of the screen.
   */
  eraseDown(): this
  /**
   * erase from the current cursor position to the start of the current line.
   */
  eraseStartLine(): this
  /**
   * erase from the current cursor position to the end of the current line.
   */
  eraseEndLine(): this
  /**
   *   erase the entire current line.
   */
  eraseLine(): this
  /**
   * erase from the current cursor position up the specified amount of rows.
   */
  eraseLines(amount: number): this
  /**
   * erase the screen and move the cursor the top left position.
   */
  eraseScreen(): this
  /**
   * scroll display up one line.
   */
  scrollUp(): this
  /**
   * scroll display down one line.
   */
  scrollDown(): this
  /**
   * output a beeping sound.
   */
  beep(): this
  /**
   * clear the terminal screen.
   */
  clearScreen(): this
  /**
   * output text
   */
  text(text: string): this
  /**
   * line feed
   */
  ln(): this
}

export { Terminal }
