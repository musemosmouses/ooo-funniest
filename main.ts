// ooo-funniest — main.ts
// Writes the single out-of-office auto-reply to $MAKEFUN_OUTPUT_DIR/entry.txt
// (fallback: out/entry.txt for local runs). Deterministic: one fixed string,
// no network, no randomness, no clock.
//
// The entry, written for the judge brief:
// Beat 1 — an ordinary OOO opening ("I'm out of office") so it reads like
// a real away message a person would switch on.
// Beat 2 — the twist: the auto-reply itself has been answering other
// auto-replies all week.
// Beat 3 — the escalation: they've started a group chat without the sender.
// Fresh angle: the joke is about the auto-reply mechanism itself, not a
// beach, an inbox, or "limited email access". Original line, written for
// this bounty only — not the sibling kreutzx out-of-office entry.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I'm out of office. My auto-reply has been answering other auto-replies all week, and they've started a group chat without me.";

// The kit gate only accepts 1 to 160 characters, counted as code points,
// so the check below mirrors it exactly. Fail loudly instead of shipping
// an entry the gate would refuse.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 160) {
  throw new Error(`entry is ${charCount} characters, must be 1..160`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "out");
mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, ENTRY, "utf8");
console.log(`wrote entry to ${entryPath} (${charCount} characters)`);
