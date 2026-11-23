import { mkdirSync, writeFileSync } from "node:fs";

// One line, at most 200 characters, about a small good thing that happened
// today: an unasked-for kindness from a familiar stranger.
const entry =
  "The old man at the warung remembered my order before I opened my mouth, then slipped an extra kerupuk into my bag like a secret.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n");
console.log(`wrote ${entry.length} chars to /output/entry.txt`);
