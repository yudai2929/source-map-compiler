import path = require("path");
import { CompileParams, CompileResult } from "./compile.type";
import { SourceMapGenerator } from "source-map";

export const compile = ({
  sourceCode,
  sourceFilePath,
}: CompileParams): CompileResult => {
  const destFileName =
    path.basename(sourceFilePath, path.extname(sourceFilePath)) + ".js";

  const gen = new SourceMapGenerator({ file: destFileName });

  gen.setSourceContent(sourceFilePath, sourceCode);

  const code = sourceCode
    .split("\n")
    .map((line, idx) => {
      gen.addMapping({
        source: sourceFilePath,
        original: { line: idx + 1, column: 0 },
        generated: { line: idx + 1, column: 0 },
      });
      return line.toLowerCase();
    })
    .join("\n");

  return {
    code: code + `\n//# sourceMappingURL=${destFileName}.map`,
    map: gen.toString(),
    fileName: destFileName,
  };
};
