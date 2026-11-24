// One Emoji, One Smile: a single smiling emoji as the whole entry.
// Gate: /output/entry.txt, UTF-8, 1 to 8 characters, exactly one emoji.
// Chosen emoji: 😁 (1 character). Revised run: verified byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entry = "😁";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
