export const getArguments = (argsCount: number) => {
  const args = process.argv.slice(2);

  if (args.length !== argsCount) {
    throw new Error(
      `Expected ${argsCount} arguments, but got ${args.length} instead.`
    );
  }

  return args;
};
