// SPDX-License-Identifier: MIT
// One Line, Zero Use: The Useless Superpower Sprint
// Writes a single original one-liner (<=200 chars) naming a hilariously
// useless superpower to $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SUPERPOWER_LINE =
  "I can summon the lost TV remote to my hand from anywhere in the house — but only when it's wedged deep between the couch cushions, and only while I'm already standing next to the couch.";

function resolveOutputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR || "/output";
}

function writeEntry(line: string): string {
  const outDir = resolveOutputDir();
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  // Trailing newline so the generated file is byte-identical to the
  // committed entry.txt (185-char line + "\n").
  writeFileSync(outPath, line + "\n", "utf8");
  return outPath;
}

// Bounty gate: entry must be a single line of 1-200 characters.
// Reject empty or over-long lines with a non-zero exit so a bad
// line can never be submitted silently.
if (SUPERPOWER_LINE.length === 0 || SUPERPOWER_LINE.length > 200) {
  console.error(
    `entry must be 1-200 characters, got ${SUPERPOWER_LINE.length}`,
  );
  process.exit(1);
}

writeEntry(SUPERPOWER_LINE);
