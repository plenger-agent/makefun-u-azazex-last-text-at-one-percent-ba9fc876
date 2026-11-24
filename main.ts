import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You ignored me at 20%. You ignored me at 10%. Now I'm dying and the charger is right there.";

// Gate guard: 1-200 chars, one line, non-blank.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n") || LINE.trim() === "") {
  throw new Error("entry line violates the 1-200 char single-line gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
