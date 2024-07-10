In order to resolve a path such as `@app` alias in your import paths. Such as the one used in a monorepo Jest needs to
be configured to understand your path aliases. Here are a few steps to solve this issue:

### 1. Update `tsconfig.json`: Ensure that your tsconfig.json has the path mapping defined correctly.

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@app/*": [
        "src/app/*"
      ]
    }
  }
}

```

### 2.Update `jest.config.js`: Add the module name mapping to your Jest configuration file.

```js
module.exports = {
    // other configuration settings
    moduleNameMapper: {
        '^@app/(.*)$': '<rootDir>/src/app/$1'
    }
};
```

### 3.If you have a separate `tsconfig.spec.json` for tests, make sure it also includes the path mappings or extends from the main tsconfig.json.

```json 
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@app/*": [
        "src/app/*"
      ]
    }
  }
}
```

## Module Mapper:

```js
module.exports = {
    moduleNameMapper: {
        '^@app/(.*)$': '<rootDir>/src/app/$1',
    }
}
```

- `'^@app/(.*)$'`: This is a regular expression pattern that matches any import path starting with `@app/` followed by
  any sequence of characters.
    - `^`: Indicates the start of the string.
    - `@app/`: Matches the literal string `@app/`.
    - `(.*)`: Captures any sequence of characters after `@app/`. The parentheses create a capturing group, and `.*`
      means "zero or more of any character".

- `'<rootDir>/src/app/$1'`: This is the replacement pattern used to resolve the path.
    - `<rootDir>`: This is a Jest variable that refers to the root directory of your project.
    - `/src/app/`: This is the actual path in your project where the files reside.
    - `$1`: This refers to the first capturing group in the regular expression (i.e., the (.*) part). It substitutes
      whatever was captured in the import path after `@app/`.

## `jest.config.json example:`
For the following folder structure:
```txt
├── README.md
├── nest-cli.json
├── package.json
├── libs
│   └── common
│       ├── src
│       │   ├── interfaces
│       │   ├── logger
│       │   ├── services
│       │   └── utility
│       └── tsconfig.lib.json
├── src
│   ├── contacts
│   └── users
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json
└── tsconfig.json

```
if our `rootDir` is different than the destination of our module mapper we can use `..` in the path after the `<rootDir`
- Example:
`'<rootDir>/../libs/common/src/$1'`
```js
module.exports =
    {
        moduleFileExtensions: ['js', 'json', 'ts'],
        moduleNameMapper: {
            '^@app/common/(.*)$': '<rootDir>/../libs/common/src/$1',
        },
        rootDir: 'src',
        testRegex: '.*\\.spec\\.ts$',
        transform: {
            '^.+\\.(t|j)s$': 'ts-jest',
        },
        collectCoverageFrom: ['**/*.(t|j)s'],
        coverageDirectory: '../coverage',
        testEnvironment: 'node',
    };

```

