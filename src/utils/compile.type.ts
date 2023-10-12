export type CompileResult = {
  code: string;
  map: string;
  fileName: string;
};

export type CompileParams = {
  sourceCode: string;
  sourceFilePath: string;
};
