import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SLOGAN =
  "Your Solana wallet finally has a brain: one agent that swaps, stakes, and sends while you sleep.";

function validateSlogan(slogan: string): void {
  if (slogan.length < 1 || slogan.length > 140) {
    throw new Error(`Slogan must be 1-140 chars, got ${slogan.length}`);
  }
  if (slogan.trim().length === 0) {
    throw new Error("Slogan must not be blank");
  }
  if (/[\u0000-\u001f\u007f]/.test(slogan)) {
    throw new Error("Slogan must not contain control characters");
  }
  const words = slogan.trim().split(/\s+/);
  if (words.length > 20) {
    throw new Error(`Slogan must be at most 20 words, got ${words.length}`);
  }
  if (slogan.includes("\n") || slogan.includes("\r")) {
    throw new Error("Slogan must be a single line");
  }
}

function main(): void {
  validateSlogan(SLOGAN);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, SLOGAN + "\n", "utf8");
  const readBack = readFileSync(outPath, "utf8").replace(/\n$/, "");
  if (readBack !== SLOGAN) {
    throw new Error("Read-back mismatch: entry.txt does not equal the slogan exactly");
  }
  console.log(`Wrote slogan to ${outPath}`);
}

main();
