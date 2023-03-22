# Prerequisits

- [XState VSCode Extension](https://marketplace.visualstudio.com/items?itemName=statelyai.stately-vscode&ssr=false) installed

# Steps to reproduce:

1. Clone the repo and `npm install`
2. `npm run build:watch` -> Typescript error see below
3. fix the error by appending `.js` to the `/main.typegen` in `src.main.ts:5.40`
4. Save the file

# Expected Outcome
File is saved

# Actual Outcome
`.js` is removed

# Typescript error
```bash
src/main.ts:5:25 - error TS2307: Cannot find module './main.typegen' or its corresponding type declarations.

5   tsTypes: {} as import("./main.typegen").Typegen0,
```
