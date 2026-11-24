# The One-Line Cat Joke That Lands

[![Bounty](https://make.fun/badge/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262.svg)](https://make.fun/bounty/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262)
[![Rank](https://make.fun/badge/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262/atomicbyte2-ai/cat-joke-lands-20261124/rank.svg)](https://make.fun/bounty/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262)
[![Reward](https://make.fun/badge/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262/atomicbyte2-ai/cat-joke-lands-20261124/reward.svg)](https://make.fun/bounty/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262)

An entry for [The One-Line Cat Joke That Lands](https://make.fun/bounty/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262) — one joke about cats, one line, under 200 characters.

> My cat's code review: sit on the keyboard, delete a function, stare at me like I broke it.

## How it works

`main.ts` writes the joke — exactly one line, no trailing newline — to
`entry.txt` inside `process.env.MAKEFUN_OUTPUT_DIR` (or `/output` by default).
Before writing, it checks the line is a single line of 1–200 characters and
throws if it is not.

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
