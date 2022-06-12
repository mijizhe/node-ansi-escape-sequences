# 🌈

> an ANSI escape sequences library for nodejs.

## Features

- only esm is supported.

## Install

```shell
pnpm install @mijizhe/ansi-escape-sequences
```

## Useage

```typescript
import {
  bgYellow,
  cyan,
  dim,
  magenta,
} from "@mijizhe/ansi-escape-sequences/colors"
import { Terminal } from "@mijizhe/ansi-escape-sequences/terminal"
import { bold } from "@mijizhe/ansi-escape-sequences/text"
import { setTimeout as sleep } from "timers/promises"

const terminal = new Terminal()

await terminal
  .clearScreen()
  .cursorSavePosition()
  .cursorHide()
  .write()

for (let i = 20; i > 0; i--) {
  await terminal
    .cursorRestorePosition()
    .eraseDown()
    .text(bgYellow("loading…"))
    .linefeed(2)
    .text(dim(bold("{")), cyan(i.toString()), dim(bold("}")))
    .write()
  await sleep(100)
}

await terminal
  .clearScreen()
  .text(cyan("hello"), magenta("world"), dim("!"))
  .linefeed()
  .cursorShow()
  .write()
```
