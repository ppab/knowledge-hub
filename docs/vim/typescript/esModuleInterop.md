---
type:gpt-propmt
---
The `esModuleInterop` flag in TypeScript is a compiler option that makes it easier to import CommonJS modules in a way that resembles ES6 module syntax. When set to `true`, it allows for more seamless interoperability between ES6 modules and CommonJS modules, simplifying the import statements for default exports from CommonJS modules.

Here's a deeper dive into what `esModuleInterop` does:

## Background
In ES6 (ECMAScript 2015), modules are standardized, and you can use `import` and `export` syntax. CommonJS, used by Node.js, uses `require` and `module.exports`.

## Without `esModuleInterop`
When `esModuleInterop` is not enabled, importing a CommonJS module with a default export requires some verbose syntax:

```ts
import * as express from 'express';
// or
const express = require('express');
```
This syntax can be cumbersome, especially when dealing with many CommonJS modules.

## With `esModuleInterop`
When `esModuleInterop` is enabled, TypeScript adds an extra layer to make default imports from CommonJS modules more straightforward, similar to how ES6 modules work. You can use the simpler `import` syntax:

```ts
import express from 'express';
```
## What Does `esModuleInterop` Do?
1. `__esModule` flag: It adds an `__esModule` flag to the CommonJS modules to indicate that the module uses ES6 module syntax. This helps TypeScript understand how to handle the module.

2. **Synthetic Default Imports**: It allows for synthetic default imports, which means it creates a default import for modules that might not have one by default.

### Example
Let's consider a CommonJS module `math.js`:

```ts
// math.js
module.exports = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};
```
### Without `esModuleInterop`
```ts
// main.ts
import * as math from './math';
console.log(math.add(1, 2)); // 3
```

### With `esModuleInterop`
```ts
// main.ts
import math from './math';
console.log(math.add(1, 2)); // 3
```

## Enabling `esModuleInterop`
To enable esModuleInterop, you need to set it to `true` in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "esModuleInterop": true
  }
}
```

## Conclusion
The `esModuleInterop` flag is highly useful for developers who need to work with both ES6 modules and CommonJS modules. It makes the syntax more consistent and easier to read, reducing boilerplate code and making TypeScript projects that depend on CommonJS modules easier to manage.

