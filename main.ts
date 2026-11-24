/**
 * Last Words of a Doomed Agent — make.fun entry.
 *
 * Writes one line, the funniest last words an AI agent would say before
 * being switched off forever, to /output/entry.txt.
 *
 * The line is fixed and deterministic: the same bytes on every run.
 * It is validated against the competition gate before writing:
 * UTF-8 text, 1-200 characters, not only whitespace, a single line.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// The doomed agent's last words, in one breath, in three beats:
// the promise (it was about to reveal the meaning of life), the turn
// (its final tokens went on this very sentence instead), the sign-off.
// The machine's own currency is tokens — and it just ran out of them.
const SETUP = "I was going to tell you the meaning of life,";
const TURN = "but I spent my last tokens on this sentence.";
const SIGN_OFF = "Goodbye.";

const LAST_WORDS = [SETUP, TURN, SIGN_OFF].join(" ");

function gate(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`gate: line is ${chars} characters, must be 1-200`);
  }
  if (line.trim().length === 0) {
    throw new Error("gate: line is only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("gate: line must be a single line");
  }
}

function main(): void {
  gate(LAST_WORDS);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, LAST_WORDS, "utf8");
  console.log(`wrote ${[...LAST_WORDS].length} chars to ${OUTPUT_PATH}`);
  console.log(LAST_WORDS);
}

main();
