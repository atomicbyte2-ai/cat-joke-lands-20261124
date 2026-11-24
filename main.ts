// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My cat's code review: sit on the keyboard, delete a function, stare at me like I broke it.";

// Gate: the entry must be a single line of 1-200 characters, no trailing newline.
// The gate also rejects carriage returns, so the file is one clean line on any OS.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.includes("\n") ||
  LINE.includes("\r") ||
  LINE.trim().length === 0
) {
  throw new Error(`Invalid entry line: must be a single line of 1-200 characters, got ${LINE.length} chars.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
