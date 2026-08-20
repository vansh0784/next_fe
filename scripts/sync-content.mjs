import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const REPO_URL = "https://github.com/vansh0784/url_shortner.git";

const CONTENT_DIR = path.join(process.cwd(), "content");
const TEMP_DIR = path.join(process.cwd(), ".content-repo");

if (fs.existsSync(TEMP_DIR)) {
  fs.rmSync(TEMP_DIR, {
    recursive: true,
    force: true,
  });
}

if (fs.existsSync(CONTENT_DIR)) {
  fs.rmSync(CONTENT_DIR, {
    recursive: true,
    force: true,
  });
}

execSync(
  `git clone --depth 1 --filter=blob:none --sparse "${REPO_URL}" "${TEMP_DIR}"`,
  {
    stdio: "inherit",
  },
);

execSync(
  `git -C "${TEMP_DIR}" sparse-checkout set --no-cone "/*.md" "**/*.md"`,
  {
    stdio: "inherit",
  },
);

fs.mkdirSync(CONTENT_DIR, {
  recursive: true,
});

const entries = fs.readdirSync(TEMP_DIR);

for (const entry of entries) {
  if (entry === ".git") {
    continue;
  }

  const source = path.join(TEMP_DIR, entry);
  const destination = path.join(CONTENT_DIR, entry);

  fs.cpSync(source, destination, {
    recursive: true,
  });
}

fs.rmSync(TEMP_DIR, {
  recursive: true,
  force: true,
});
