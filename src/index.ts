import { compile } from "./utils/compile";
import * as fs from "fs";
import * as path from "path";
import { getArguments } from "./cli/getArguments";
import { generateSourceMap } from "./utils/generateSourceMap";

const argsCount = 1;

const rootDir = path.join(__dirname, "..");

const [inputRelativePath] = getArguments(argsCount);

const absolutePath = path.join(rootDir, inputRelativePath);

const srcCode = fs.readFileSync(path.resolve(absolutePath), "utf8");

const { code, map, fileName } = compile({
  sourceCode: srcCode,
  sourceFilePath: inputRelativePath,
});

const destFilePath = path.join(rootDir, "output", fileName);

generateSourceMap(code, map, destFilePath);
