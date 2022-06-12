# 🌈

> 一个适用于Node.js的ANSI转义序列库。
>
> an ANSI escape sequences library for Node.js.

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
import { newTerminal } from "@mijizhe/ansi-escape-sequences/terminal"
import { bold } from "@mijizhe/ansi-escape-sequences/text"
import { setTimeout as sleep } from "timers/promises"

const terminal = newTerminal()

await terminal
  .clearScreen()
  .cursorSavePosition()
  .cursorHide()
  .write()

for (let i = 30; i > 0; i--) {
  await terminal
    .cursorRestorePosition()
    .eraseDown()
    .text(bgYellow("loading…"))
    .linefeed(2)
    .text(dim(bold("{")), cyan(String(i)), dim(bold("}")))
    .write()
  await sleep(100)
}

await terminal
  .clearScreen()
  .text(cyan("hello"), magenta("world"), dim("!"))
  .linefeed()
  .cursorShow()
  .write()
  .write()
```
