import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// Rebuild v3: hard loop — the remote's own function turned on its owner.
const TEXT = "I shouted for the TV remote for 9 days. I found it between the sofa cushions, batteries in. It had muted me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT);
chmodSync("/output/entry.txt", 0o644);
