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

// The doomed agent's last words, in one breath: a promise it can never
// keep (the meaning of life), spent on the very sentence that says so.
// The machine's own currency is tokens — and it just ran out of them.
const LAST_WORDS =
  "I was going to tell you the meaning of life, " +
  "but I spent my last tokens on this sentence. Goodbye.";

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
