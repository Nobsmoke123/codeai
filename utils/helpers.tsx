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

export const serializeJson = (obj: unknown) => {
  return JSON.parse(
    JSON.stringify(obj, (_, value) =>
      typeof value === "bigint" ? value.toString() : value,
    ),
  );
};

export const parseBackticks = (text: string) => {
  return text.split(/(`[^`]+`)/g).map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <span
          key={i}
          className="code-font font-medium text-sm text-slate-100 bg-slate-100 dark:bg-slate-800 px-2 rounded"
        >
          {part.slice(1, -1)}
        </span>
      );
    }
    return part;
  });
};

export const formatCode = (code: string) => {
  return code.replace(/{/g, "{\n").replace(/}/g, "\n}").replace(/;/g, ";\n");
};
