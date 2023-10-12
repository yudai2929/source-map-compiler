import * as fs from "fs";

export const generateSourceMap = (
  code: string,
  map: string,
  destFilePath: string
) => {
  fs.writeFileSync(destFilePath, code);
  fs.writeFileSync(destFilePath + ".map", map);
};
