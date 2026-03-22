import * as fs from "fs/promises";
import * as path from "path";
import crypto from "crypto";

export const logResponse = async (log: string) => {
  const filePath = path.join(process.cwd(), "output.ndjson");
  await fs.appendFile(filePath, log);
};

export const normalizeCode = (code: string): string => {
  return code
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n")
    .trim();
};

export const createCodeHash = (code: string): string => {
  const normalized_code = normalizeCode(code);
  return crypto.createHash("sha256").update(normalized_code).digest("hex");
};
