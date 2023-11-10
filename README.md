# source-map-compiler
Example of Creating Source Maps from AltJS

## Overview
`source-map-compiler` is a script that generates source maps during the compilation to JavaScript. This tool facilitates mapping between the source code and the compiled code, enhancing the debugging process.

## Installation
To use this project, follow these steps:

```bash
git clone https://github.com/yudai2929/source-map-compiler.git
cd source-map-compiler
npm install
```

## Usage
The basic usage is as follows:

```bash
node src/index.js [options]
```

### Options
- `-i, --input <file>`: Specify the source file to compile.
- `-o, --output <file>`: Specify the path for the output file.

Example:
```bash
node src/index.js -i input/hello.orejs -o output/hello.js
```
