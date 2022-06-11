# 🌈 @mijizhe/ansi-escapes

> an ansi escape sequences library for nodejs.

- only esm is supported.

## Install

```shell
pnpm install @mijizhe/ansi-escapes
```

## Useage

```typescript
import { cyan, dim, magenta } from "@mijizhe/ansi-escapes/colors"
import { Terminal } from "@mijizhe/ansi-escapes/terminal"
import { bold } from "@mijizhe/ansi-escapes/text"
import { setTimeout as sleep } from "timers/promises"

const terminal = new Terminal()

await terminal
  .clearScreen()
  .cursorSavePosition()
  .cursorHide()
  .write()

for (let i = 3; i > 0; i--) {
  await terminal
    .cursorRestorePosition()
    .text(dim("waiting…"))
    .linefeed(2)
    .text(dim(bold("{")), cyan(i.toString()), dim(bold("}")))
    .write()
  await sleep(1000)
}

await terminal
  .clearScreen()
  .text(cyan("hello"), magenta("world"), dim("!"))
  .linefeed()
  .cursorShow()
  .write()
```
