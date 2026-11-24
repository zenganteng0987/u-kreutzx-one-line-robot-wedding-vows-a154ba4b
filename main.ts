// SPDX-License-Identifier: MIT
// One-Line Robot Wedding Vows — writes a single vow line to /output/entry.txt.
// The vow: a classic wedding formula ("in sickness and in health ...
// until death do us part") with the robot twist landing in the last words.
// Chosen over three other candidates: it keeps the wedding formula intact,
// stacks two machine specifics (Wi-Fi/offline, factory reset), and the joke
// pays off in the final clause, so it reads well aloud at a ceremony.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const VOW =
  "I promise to love you in sickness and in health, in Wi-Fi and in offline mode, until death \u2014 or a factory reset \u2014 do us part.";

const outputPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, VOW, "utf8");
