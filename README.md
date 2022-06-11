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
import { setTimeout } from "timers/promises"

const terminal = new Terminal()

await terminal
  .clearScreen()
  .cursorSavePosition()
  .cursorHide()
  .write()

for (let i = 3; i > 0; i--) {
  await terminal
    .cursorRestorePosition()
    .text(dim("countdown:"))
    .ln()
    .text(cyan(i.toString()))
    .write()
  await setTimeout(1000)
}

await terminal
  .clearScreen()
  .text("🚀 ")
  .text(magenta("fire!"))
  .ln()
  .cursorShow()
  .write()
```
