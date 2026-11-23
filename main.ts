// SPDX-License-Identifier: MIT
// One Line, Zero Use: The Useless Superpower Sprint
// Writes a single original one-liner (<=200 chars) naming a hilariously
// useless superpower to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I can summon the lost TV remote to my hand from anywhere in the house — but only when it's wedged deep between the couch cushions, and only while I'm already standing next to the couch.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
